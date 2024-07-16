'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useUserStore from '@/store/userStore';
import useCategoryStore from '@/store/categoriesStore';
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './listingModal.module.css';

const ListingModal = ({ open, handleClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const { refreshAccessToken, setAccessToken } = useUserStore((state) => ({
        refreshAccessToken: state.refreshAccessToken,
        setAccessToken: state.setAccessToken,
    }));

    const { categories, fetchCategories } = useCategoryStore((state) => ({
        categories: state.categories,
        fetchCategories: state.fetchCategories,
    }));

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    useEffect(() => {
        console.log('Categories:', categories);
        if (categories.length > 0 && !categoryId) {
            setCategoryId(categories[0].category_id);
        }
    }, [categories]);

    useEffect(() => {
        console.log('Selected category ID:', categoryId);
    }, [categoryId]);

    const handleCategoryChange = (event) => {
        setCategoryId(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
            alert('Пожалуйста, войдите в систему, чтобы создать объявление.');
            return;
        }

        const listingData = {
            listing_id: null,
            title,
            description,
            price: parseFloat(price),
            category_id: categoryId,
            listing_status: 0,
        };

        console.log('Отправка данных:', listingData);

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/client/v1/listing/create_update_listing`,
                listingData,
                {
                    headers: {
                        'access-token': accessToken,
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log('Объявление создано:', response.data);
            handleClose();
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log('Несанкционированный доступ. Пытаюсь обновить токен...');
                const newAccessToken = await refreshAccessToken();
                if (newAccessToken) {
                    localStorage.setItem('access_token', newAccessToken);
                    setAccessToken(newAccessToken);
                    // Retry the request with the new access token
                    try {
                        const retryResponse = await axios.post(
                            `${process.env.NEXT_PUBLIC_API_URL}/client/v1/listing/create_update_listing`,
                            listingData,
                            {
                                headers: {
                                    'access-token': newAccessToken,
                                    'Content-Type': 'application/json',
                                },
                            }
                        );

                        console.log('Объявление создано:', retryResponse.data);
                        handleClose();
                    } catch (retryError) {
                        console.error('Не удалось создать объявление при повторной попытке:', retryError);
                        alert('Не удалось создать объявление при повторной попытке. Пожалуйста, попробуйте снова.');
                    }
                } else {
                    alert('Несанкционированный доступ. Пожалуйста, войдите снова.');
                }
            } else {
                console.error('Не удалось создать объявление:', error);
                alert('Не удалось создать объявление. Пожалуйста, попробуйте снова.');
            }
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box className={styles.modalBox}>
                <IconButton className={styles.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
                <Typography variant="h5" component="h2" gutterBottom>
                    Создать объявление
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Название"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <TextField
                        label="Описание"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        multiline
                        rows={4}
                    />
                    <TextField
                        label="Цена"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <FormControl variant="outlined" fullWidth margin="normal">
                        <InputLabel>Категория</InputLabel>
                        <Select
                            value={categoryId}
                            onChange={handleCategoryChange}
                            label="Категория"
                            required
                        >
                            {categories.map((category) => (
                                <MenuItem key={category.category_id} value={category.category_id}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Отправить
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ListingModal;
