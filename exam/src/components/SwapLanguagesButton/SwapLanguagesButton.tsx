import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import styles from './SwapLanguagesButton.module.scss';

export default function SwapLanguagesButton() {
    return (
        <button className={styles['swap-button']}>
            <SwapHorizIcon />
        </button>
    );
}
