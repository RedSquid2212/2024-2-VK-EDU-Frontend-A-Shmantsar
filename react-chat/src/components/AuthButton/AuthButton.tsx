import React from 'react';
import styles from './AuthButton.module.scss';

type AuthButtonArgs = {
    text: string;
}

export default function AuthButton({ text }: AuthButtonArgs) {
    return (
        <button type="button" className={styles['auth-button']}>
            {text}
        </button>
    );
}
