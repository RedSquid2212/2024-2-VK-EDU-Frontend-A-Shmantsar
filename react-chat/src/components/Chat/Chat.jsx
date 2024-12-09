import Avatar from '../../common/components/Avatar/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import styles from './Chat.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Chat({ chatName, lastMessage, lastMessageTime, isChecked }) {
  const navigate = useNavigate();
  const onChatClick = () => navigate('/chat/:id');

  return (
    <div
      className={styles.chat} onClick={onChatClick}
    >
      <div className={styles.avatar}>
        <Avatar chatName={chatName} info={lastMessage} />
      </div>
      <div className={styles['last-message-time']}>
        {lastMessageTime}
      </div>
      <div className={styles['is-readed']}>
        {isChecked ? <DoneAllIcon fontSize='small' /> : <CheckIcon fontSize='small' />}
      </div>
    </div>
  );
}
