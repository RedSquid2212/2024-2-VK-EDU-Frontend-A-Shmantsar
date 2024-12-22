import React from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import styles from './AuthAvatarUpload.module.scss';

export default function AuthAvatarUpload() {
    return (
        <div className={styles['upload-wrapper']}>
            <span className={styles['upload-label-text']}>Avatar</span>
            <input id="upload" className={styles.upload} type='file' />
            <label htmlFor="upload" className={styles['upload-button']}>
                <UploadIcon />
                <span>Upload avatar</span>
            </label>
        </div>
    );
}
