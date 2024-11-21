import classNames from 'classnames';
import styles from './Message.module.scss';

export default function Message({ text, time }) {
    return (
        <div className={classNames(styles.message, styles['from-user'])}>
            {text}
            <span className={styles['message-time']}>{time}</span>
        </div>
    );
}