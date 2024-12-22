import React from 'react';
import styles from './LoginPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
    return (
        <div className={styles['login-page']}>
            <h1 className={styles.title}>Login</h1>
            <LoginForm />
        </div>
    );
}
