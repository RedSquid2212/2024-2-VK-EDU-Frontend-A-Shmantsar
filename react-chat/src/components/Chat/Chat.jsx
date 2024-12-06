import Avatar from '../../common/components/Avatar/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import styles from './Chat.module.scss';

export default function Chat ({ chatName, lastMessage, lastMessageTime, isChecked, setRoute, setChatInfo }) {
  return (
    <div
      className={styles.chat} onClick={() => {
        setRoute('chat');
        setChatInfo(prevState => ({
          ...prevState,
          chatName,
        }));
      }}
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
