import React from 'react';
import AuthFormsInput from '../AuthFormsInput/AuthFormsInput';
import styles from './RegisterForm.module.scss';
import AuthButton from '../AuthButton/AuthButton';
import AuthAvatarUpload from '../AuthAvatarUpload/AuthAvatarUpload';
import AuthSwapButton from '../AuthSwapButton/AuthSwapButton';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
    const navigate = useNavigate();
    const onSwapButtonClick = () => {
        navigate('/login');
    };
    
    return (
        <form className={styles['register-form']} >
            <AuthFormsInput inputType='text' label='Username' isTextArea={false} />
            <AuthFormsInput inputType='password' label='Password' isTextArea={false} />
            <AuthFormsInput inputType='text' label='First name' isTextArea={false} />
            <AuthFormsInput inputType='text' label='Last name' isTextArea={false} />
            <AuthFormsInput inputType='text' label='Bio' isTextArea={true} />
            <AuthAvatarUpload />
            <AuthButton text='Register'/>
            <AuthSwapButton text='Already registered? Login' onClick={onSwapButtonClick} />
        </form>
    );
}
