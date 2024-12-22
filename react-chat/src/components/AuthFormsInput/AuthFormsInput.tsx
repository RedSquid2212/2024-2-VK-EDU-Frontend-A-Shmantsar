import React from 'react';
import classnames from 'classnames';
import styles from './AuthFormsInput.module.scss';

type AuthFormsArgs = {
    inputType: 'text' | 'password';
    label: string;
    isTextArea: boolean;
}

export default function AuthFormsInput({ inputType, label, isTextArea }: AuthFormsArgs) {
    return (
        <>
            {
                isTextArea ?
                <label className={styles.label}>
                    <span className={styles['label-text']}>{label}</span>
                    <textarea className={classnames(styles['auth-input'], styles['textarea'])} />
                </label> :
                <label className={styles.label}>
                    <span className={styles['label-text']}>{label}</span>
                    <input type={inputType} className={styles['auth-input']} />
                </label>
            }
        </>
    );
}
