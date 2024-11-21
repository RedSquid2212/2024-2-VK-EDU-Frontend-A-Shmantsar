import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './BackButton.module.scss';

export default function BackButton() {
    return (
        <button className={styles['back-button']}>
            <ArrowBackIcon />
        </button>
    );
}