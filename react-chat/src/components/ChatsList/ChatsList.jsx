import Chat from '../Chat/Chat';
import NewChatButton from '../NewChatButton/NewChatButton';
import styles from './ChatsList.module.scss';

export default function ChatsList() {
  const chatsInfo = [
    { chatName: 'Дженнифер Эшли', lastMessage: 'Ты куда пропал?', lastMessageTime: '15:52', isChecked: false },
    { chatName: 'Общество целых бокалов', lastMessage: 'Ребят, без меня сегодня :(', lastMessageTime: '15:52', isChecked: true },
    { chatName: 'Антон Иванов', lastMessage: 'Тоха, ты где?', lastMessageTime: '15:52', isChecked: true },
    { chatName: 'Серёга (должен 2000р)', lastMessage: 'Серёг, это Петя. Где бабло моё?', lastMessageTime: '15:52', isChecked: true },
    { chatName: 'Общество разбитых бокалов', lastMessage: 'Петька, ты с нами сегодня?', lastMessageTime: '15:52', isChecked: false },
    { chatName: 'Сэм с Нижнего', lastMessage: 'Отправил картиночку', lastMessageTime: '15:52', isChecked: false },
    { chatName: 'Айрат работа', lastMessage: 'Айрат, во сколько приедешь?', lastMessageTime: '15:52', isChecked: true },
    { chatName: 'Кеша армия', lastMessage: 'Кеш, задолбал тупить', lastMessageTime: '15:52', isChecked: true },
  ];
  return (
    <main className={styles['main-page__chats-list']}>
      {
        chatsInfo.map((chatInfo, index) =>
          <Chat
            key={chatInfo.chatName}
            chatName={chatInfo.chatName}
            lastMessage={chatInfo.lastMessage}
            lastMessageTime={chatInfo.lastMessageTime}
            isChecked={chatInfo.isChecked}
            id={index}
          />)
      }
      <NewChatButton />
    </main>
  );
}
