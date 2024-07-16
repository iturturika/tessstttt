import styles from "./logo.module.scss";
export function Logo(){
    return (
        <a href='/' className={styles.logo}>
            <img
                loading='lazy'
                src='/img/logo-2.svg'
                width={150}
                height={50}
                alt='Логотип Kangaroo'
            />
        </a>
    )
}