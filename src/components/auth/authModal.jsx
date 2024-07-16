'use client'
import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, TextField, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import useUserStore from '../../store/userStore';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '20px',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const loginSchema = yup.object().shape({
    phone_number: yup.string().required('Phone number is required'),
    password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
});

const registrationSchema = yup.object().shape({
    phone: yup.string().required('Phone number is required'),
    password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

const forgotPasswordSchema = yup.object().shape({
    phoneOrEmail: yup.string().required('Phone or email is required'),
});

function AuthModal({ open, handleClose, setUser }) {
    const [step, setStep] = useState(0);
    const [isAuth, setIsAuth] = useState(false);

    const { control: loginControl, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors } } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const { control: registerControl, handleSubmit: handleRegisterSubmit, formState: { errors: registerErrors } } = useForm({
        resolver: yupResolver(registrationSchema),
    });

    const { control: forgotPasswordControl, handleSubmit: handleForgotPasswordSubmit, formState: { errors: forgotPasswordErrors } } = useForm({
        resolver: yupResolver(forgotPasswordSchema),
    });

    useEffect(() => {
        let storedAccessToken;
        let storedRefreshToken;

        if (typeof window !== "undefined") {
            storedAccessToken = localStorage.getItem('access_token');
            storedRefreshToken = localStorage.getItem('refresh_token');
        }

        if (storedAccessToken && storedRefreshToken) {
            validateToken(storedAccessToken, storedRefreshToken).then(isValid => {
                if (isValid) {
                    setIsAuth(true);
                    setUser({ access_token: storedAccessToken, refresh_token: storedRefreshToken });
                }
            });
        }
    }, [setUser]);

    const validateToken = async (accessToken, refreshToken) => {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const tokenData = JSON.parse(atob(accessToken.split('.')[1]));

        if (currentTimestamp > tokenData.exp) {
            console.log("Token expired, attempting to refresh...");
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/client/v1/user/refresh`, { refresh_token: refreshToken });
                const { access_token, refresh_token } = response.data;
                
                if (typeof window !== "undefined") {
                    localStorage.setItem('access_token', access_token);
                    localStorage.setItem('refresh_token', refresh_token);
                }
                setUser(response.data);
                return true;
            } catch (error) {
                console.error("Failed to refresh token:", error);
                
                if (typeof window !== "undefined") {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                }
                return false;
            }
        } else {
            return true;
        }
    };

    const onLoginSubmit = async (data) => {
        console.log("Login Data:", data);

        try {
            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/client/v1/user/login`;
            const loginData = {
                phone_number: data.phone_number,
                password: data.password,
            };

            const response = await axios.post(apiUrl, loginData);
            const { access_token, refresh_token } = response.data;

            console.log('Access Token:', access_token);
            console.log('Refresh Token:', refresh_token);  // Log refresh token

            
            if (typeof window !== "undefined") {
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('refresh_token', refresh_token);
                console.log('Access Token in localStorage:', localStorage.getItem('access_token'));  // Verify storage
                console.log('Refresh Token in localStorage:', localStorage.getItem('refresh_token'));  // Verify storage
              }

            setUser(response.data);
            setIsAuth(true);
            handleClose();
        } catch (error) {
            console.error('Login Error:', error);
            alert('Login failed. Please check your credentials.');
        }
    };


    const onRegisterSubmit = async (data) => {
        try {
            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/client/v1/user/register`;
            const registrationData = {
                phone: data.phone,
                password: data.password,
            };

            const response = await axios.post(apiUrl, registrationData);
            setUser(response.data);
            handleClose();
        } catch (error) {
            console.error('Registration Error:', error);
            alert('Registration failed. Please try again.');
        }
    };

    const onForgotPasswordSubmit = async (data) => {
        console.log("Forgot Password Data:", data);

        try {
            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/client/v1/user/forgot-password`;
            const forgotPasswordData = {
                phoneOrEmail: data.phoneOrEmail,
            };

            await axios.post(apiUrl, forgotPasswordData);
            alert('Password reset instructions have been sent to your email or phone.');
            setStep(0);
        } catch (error) {
            console.error('Forgot Password Error:', error);
            alert('Password reset failed. Please try again.');
        }
    };

    const goToLogin = () => {
        setStep(0);
    };

    const goToRegister = () => {
        setStep(2);
    };


    const renderContent = () => {
        switch (step) {
            case 0:
                return (
                    <Box component="form" noValidate autoComplete="off" onSubmit={handleLoginSubmit(onLoginSubmit)}>
                        <Typography variant="h5" component="h2">
                            Вход
                        </Typography>
                        <Controller
                            name="phone_number"
                            control={loginControl}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Номер телефона"
                                    fullWidth
                                    margin="normal"
                                    error={!!loginErrors.phone_number}
                                    helperText={loginErrors.phone_number ? loginErrors.phone_number.message : ''}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={loginControl}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Пароль"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    error={!!loginErrors.password}
                                    helperText={loginErrors.password ? loginErrors.password.message : ''}
                                />
                            )}
                        />
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Запомнить пароль"
                        />
                        <Link href="#" underline="none" onClick={() => setStep(3)}>
                            Забыли пароль?
                        </Link>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Войти
                        </Button>
                    </Box>
                );
            case 1:
                return (
                    <Box component="form" noValidate autoComplete="off" onSubmit={handleLoginSubmit(onLoginSubmit)}>
                        <Typography variant="h5" component="h2" marginBottom={2}>
                            Введите номер телефона
                        </Typography>
                        <Controller
                            name="phone_number"
                            control={loginControl}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Введите номер телефона"
                                    fullWidth
                                    margin="normal"
                                    error={!!loginErrors.phone_number}
                                    helperText={loginErrors.phone_number ? loginErrors.phone_number.message : ''}
                                />
                            )}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Продолжить
                        </Button>
                        <Typography mt={2} textAlign="center" color="textSecondary" variant="body2">
                            Уже есть профиль? <Link href="#" underline="none" onClick={goToLogin}>Войти</Link>
                        </Typography>
                        <Typography mt={2} textAlign="center" color="textSecondary" variant="body2">
                            При регистрации вы соглашаетесь с <Link href="https://support.avito.ru/articles/200026948">условиями использования Авито</Link> и <Link href="/safety/personal/company">политикой конфиденциальности</Link>.
                        </Typography>
                    </Box>
                );
            case 2:
                return (
                    <Box component="form" noValidate autoComplete="off" onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
                        <Typography variant="h6" component="h2">
                            Регистрация
                        </Typography>
                        <Controller
                            name="phone"
                            control={registerControl}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Телефон"
                                    type="text"
                                    fullWidth
                                    margin="normal"
                                    error={!!registerErrors.phone}
                                    helperText={registerErrors.phone ? registerErrors.phone.message : ''}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={registerControl}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Пароль"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    error={!!registerErrors.password}
                                    helperText={registerErrors.password ? registerErrors.password.message : ''}
                                />
                            )}
                        />
                        <Controller
                            name="confirmPassword"
                            control={registerControl}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Подтвердить пароль"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    error={!!registerErrors.confirmPassword}
                                    helperText={registerErrors.confirmPassword ? registerErrors.confirmPassword.message : ''}
                                />
                            )}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Зарегистрироваться
                        </Button>
                        <Box mt={3} textAlign="center">
                            <Typography>Или продолжить через</Typography>
                            <Box display="flex" justifyContent="center" mt={1}>
                                <Button><img src="https://www.avito.st/remote-modules/component-auth/d69e4427/0c3c9627dc405cca074d.svg" alt="VK ID" /></Button>
                                <Button><img src="https://www.avito.st/remote-modules/component-auth/d69e4427/264091c8aecbf4a6347a.svg" alt="Одноклассники" /></Button>
                                <Button><img src="https://www.avito.st/remote-modules/component-auth/d69e4427/eebfaa73a454aac38180.svg" alt="Apple ID" /></Button>
                                <Button><img src="https://www.avito.st/remote-modules/component-auth/d69e4427/c4acddb549b24b6229a7.svg" alt="Google" /></Button>
                            </Box>
                        </Box>
                        <Typography mt={3} textAlign="center">
                            Уже есть аккаунт?
                        </Typography>
                        <Button type="button" variant="outlined" fullWidth onClick={goToLogin}>
                            Войти
                        </Button>
                        <Typography mt={2} textAlign="center" color="textSecondary" variant="body2">
                            При регистрации и входе вы соглашаетесь с <Link href="https://support.avito.ru/articles/200026948">условиями использования Kangaroo</Link> и <Link href="/safety/personal/company">политикой конфиденциальности</Link>.
                        </Typography>
                    </Box>
                );
            case 3:
                return (
                    <Box component="form" noValidate autoComplete="off" onSubmit={handleForgotPasswordSubmit(onForgotPasswordSubmit)}>
                        <Typography variant="h5" component="h2">
                            Восстановление пароля
                        </Typography>
                        <Controller
                            name="phoneOrEmail"
                            control={forgotPasswordControl}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Телефон или почта"
                                    fullWidth
                                    margin="normal"
                                    error={!!forgotPasswordErrors.phoneOrEmail}
                                    helperText={forgotPasswordErrors.phoneOrEmail ? forgotPasswordErrors.phoneOrEmail.message : ''}
                                />
                            )}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Сбросить текущий пароль
                        </Button>
                        <Button type="button" variant="outlined" fullWidth onClick={goToLogin} sx={{ mt: 2 }}>
                            Назад к входу
                        </Button>
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                {renderContent()}
                {step === 0 && (
                    <>
                        <Box mt={3} textAlign="center">
                            <Typography>Или продолжить через</Typography>
                            <Box display="flex" justifyContent="center" mt={1}>
                                <Button><img src="https://www.avito.st/remote-modules/component-auth/d69e4427/0c3c9627dc405cca074d.svg" alt="VK&nbsp;ID" /></Button>
                                <Button><img src="https://www.avito.st/remote-modules/component-auth/d69e4427/264091c8aecbf4a6347a.svg" alt="Одноклассники" /></Button>
                                <Button><img src="https://www.avito.st/remote-modules/component-auth/d69e4427/eebfaa73a454aac38180.svg" alt="Apple ID" /></Button>
                                <Button><img src="https://www.avito.st/remote-modules/component-auth/d69e4427/c4acddb549b24b6229a7.svg" alt="Google" /></Button>
                            </Box>
                        </Box>
                        <Typography mt={3} textAlign="center">
                            Нет аккаунта на&nbsp;Kangoroo?
                        </Typography>
                        <Button type="button" variant="outlined" fullWidth onClick={() => setStep(1)}>
                            Зарегистрироваться
                        </Button>
                        <Typography mt={2} textAlign="center" color="textSecondary" variant="body2">
                            При регистрации и&nbsp;входе вы&nbsp;соглашаетесь с&nbsp;
                            <Link href="https://support.avito.ru/articles/200026948">условиями использования Kangoroo</Link>
                            &nbsp;и&nbsp;
                            <Link href="/safety/personal/company">политикой конфиденциальности</Link>.
                        </Typography>
                    </>
                )}
            </Box>
        </Modal>
    );
}

export default AuthModal;