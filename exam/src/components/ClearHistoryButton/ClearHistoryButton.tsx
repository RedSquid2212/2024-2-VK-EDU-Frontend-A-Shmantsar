import { LocalStorageService } from '../../services/localStorage.service';
import { TranslatesHistory } from '../../types/history';
import styles from './ClearHistoryButton.module.scss';

type ClearHistoryButtonArgs = {
    setHistory: React.Dispatch<React.SetStateAction<TranslatesHistory | null>>;
};

export default function ClearHistoryButton({ setHistory }: ClearHistoryButtonArgs) {
    const localStorageService = new LocalStorageService();
    const onClick = () => {
        localStorageService.clearHistory();
        setHistory(null);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <button type='button' className={styles['history-button']} onClick={onClick}>
                    Очистить историю
                </button>
            </div>
            <hr />
        </>
    );
}
