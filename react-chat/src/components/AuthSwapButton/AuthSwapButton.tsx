import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './AuthSwapButton.module.scss';

type AuthSwapButtonArgs = {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function AuthSwapButton({ text, onClick }: AuthSwapButtonArgs) {
    return (
        <button type="button" className={styles['swap-button']} onClick={onClick}>
            <span>{text}</span>
            <ArrowForwardIcon />
        </button>
    );
}
