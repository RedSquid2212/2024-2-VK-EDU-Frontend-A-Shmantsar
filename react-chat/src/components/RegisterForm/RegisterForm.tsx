import React from 'react';
import AuthFormsInput from '../AuthFormsInput/AuthFormsInput';
import styles from './RegisterForm.module.scss';
import AuthButton from '../AuthButton/AuthButton';
import AuthAvatarUpload from '../AuthAvatarUpload/AuthAvatarUpload';

export default function RegisterForm() {
    return (
        <form className={styles['register-form']} >
            <AuthFormsInput inputType='text' label='Username' isTextArea={false} />
            <AuthFormsInput inputType='password' label='Password' isTextArea={false} />
            <AuthFormsInput inputType='text' label='First name' isTextArea={false} />
            <AuthFormsInput inputType='text' label='Last name' isTextArea={false} />
            <AuthFormsInput inputType='text' label='Bio' isTextArea={true} />
            <AuthAvatarUpload />
            <AuthButton text='Register'/>
        </form>
    );
}
