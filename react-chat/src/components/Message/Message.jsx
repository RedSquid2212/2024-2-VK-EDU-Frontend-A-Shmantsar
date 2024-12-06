import classNames from 'classnames';
import styles from './Message.module.scss';

export default function Message ({ text, time, isNew, isReceived }) {
  return (
    <div className={classNames(styles.message, isReceived && styles['from-user'], isNew && styles['new-message'])}>
      {text}
      <span className={styles['message-time']}>{time}</span>
    </div>
  );
}
