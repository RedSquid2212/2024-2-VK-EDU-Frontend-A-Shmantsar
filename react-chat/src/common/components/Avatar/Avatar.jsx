import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import styles from './Avatar.module.scss';

export default function Avatar({ chatName, info }) {
  const avatar = createAvatar(adventurer, {
    size: 40,
    seed: chatName,
  }).toDataUri();

  return (
    <div className={styles['contact-wrapper']}>
      <img src={avatar} alt='Avatar' className={styles['chat-avatar']} />
      <div className={styles['chat-name']}>
        {chatName}
      </div>
      <span className={styles['chat-info']}>
        {info}
      </span>
    </div>
  );
}
