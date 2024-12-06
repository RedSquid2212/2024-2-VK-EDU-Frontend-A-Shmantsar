import { useRef, useState } from 'react';
import styles from './NewMessageForm.module.scss';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { setItemToLocalStorage } from '../../utils/localStorage.service';

export default function NewMessageForm ({ setMessages }) {
  const [inputValue, setInputValue] = useState('');
  const inputElement = useRef(null);
  const onSubmit = (event) => {
    event.preventDefault();
    setMessages(prevState => {
      const newState = [...prevState, {
        text: inputValue.trim(),
        time: new Date().toLocaleTimeString('RU', { hour: '2-digit', minute: '2-digit' }),
        isNew: true,
        isReceived: false,
      }];
      setItemToLocalStorage('messages', newState);
      return newState;
    });
    inputElement.current.value = '';
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles['input-container']}>
        <input
          ref={inputElement}
          className={styles['message-input']}
          name='message-text'
          placeholder='Сообщение'
          type='text'
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className={styles['attach-button']} type='button'>
          <AttachmentIcon />
        </button>
      </div>
    </form>
  );
}
