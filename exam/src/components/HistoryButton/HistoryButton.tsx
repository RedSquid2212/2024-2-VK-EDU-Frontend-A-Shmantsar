import HistoryIcon from '@mui/icons-material/History';
import styles from './HistoryIcon.module.scss';
import { useNavigate } from 'react-router-dom';

export default function HistoryButton() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/history');
    };

    return (
        <div className={styles.wrapper}>
            <button type='button' className={styles['history-button']} onClick={onClick}>
                <HistoryIcon fontSize='inherit' />
            </button>
            История
        </div>
    );
}
