import TranslateIcon from '@mui/icons-material/Translate';
import styles from './TranslateTextButton.module.scss';

export default function TranslateTextButton() {
    return (
        <button type='button' className={styles['translate-button']}>
            <TranslateIcon />
            Text
        </button>
    );
}
