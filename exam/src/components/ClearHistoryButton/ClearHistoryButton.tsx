import styles from './ClearHistoryButton.module.scss';

export default function ClearHistoryButton() {
    return (
        <>
            <div className={styles.wrapper}>
                <button type='button' className={styles['history-button']}>
                    Очистить историю
                </button>
            </div>
            <hr />
        </>
    );
}
