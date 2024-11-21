import Message from '../Message/Message';
import styles from './MessageList.module.scss';

export default function MessageList() {
    return (
        <>
            <div className={styles['message-list']}>
                <Message text={'Я тут кое-что нарисовала. Посмотри, как будет время'} time={'10:53'} key={1}/>
                <Message text={'Тебе нравится, как я нарисовала?'} time={'10:53'} key={2}/>
            </div>
        </>
    );
}