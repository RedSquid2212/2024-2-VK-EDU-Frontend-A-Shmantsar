import React from 'react';
import AuthFormsInput from '../AuthFormsInput/AuthFormsInput';
import AuthButton from '../AuthButton/AuthButton';
import styles from './LoginForm.module.scss';
import AuthSwapButton from '../AuthSwapButton/AuthSwapButton';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    const onSwapButtonClick = () => {
        navigate('/register');
    };

    return (
        <form className={styles['login-form']} >
            <AuthFormsInput inputType='text' label='Username' isTextArea={false} />
            <AuthFormsInput inputType='password' label='Password' isTextArea={false} />
            <AuthButton text='Login' />
            <AuthSwapButton text='Have not registered yet? Register' onClick={onSwapButtonClick}/>
        </form>
    );
}
