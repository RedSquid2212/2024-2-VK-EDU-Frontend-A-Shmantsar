import Message from '../Message/Message';
import styles from './MessageList.module.scss';

export default function MessageList({ messages }) {
  return (
    <>
      <div className={styles['message-list']}>
        {messages.map(message => (
          <Message
            text={message.text}
            time={message.time}
            isNew={message.isNew}
            isReceived={message.isReceived}
            key={`${message.text}_${new Date()}`}
          />
        ))}
      </div>
    </>
  );
}
