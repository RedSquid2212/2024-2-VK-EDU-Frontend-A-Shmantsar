import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.scss';

export default function RegisterPage() {
    return (
        <div className={styles['register-page']}>
            <h1 className={styles.title}>Register</h1>
            <RegisterForm />
        </div>
    );
}
