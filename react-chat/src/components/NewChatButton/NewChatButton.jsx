import EditIcon from '@mui/icons-material/Edit';
import styles from './NewChatButton.module.scss';

export default function NewChatButton () {
  return (
    <button className={styles['new-chat-button']}>
      <EditIcon />
    </button>
  );
}
