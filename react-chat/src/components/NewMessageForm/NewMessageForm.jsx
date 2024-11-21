import styles from './NewMessageForm.module.scss';
import AttachmentIcon from '@mui/icons-material/Attachment';

export default function NewMessageForm() {
    return (
        <form className={styles.form}>
            <div className={styles['input-container']}>
                <input className={styles['message-input']} name="message-text" placeholder="Сообщение" type="text" />
                <button className={styles['attach-button']} type="button">
                    <AttachmentIcon />
                </button>
            </div>
        </form>
    );
}