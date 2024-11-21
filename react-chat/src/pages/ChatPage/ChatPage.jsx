import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MessageList from '../../components/MessageList/MessageList';
import NewMessageForm from '../../components/NewMessageForm/NewMessageForm';

export default function ChatPage({ chatName, info, setRoute }) {
    return (
        <>
            <ChatHeader setRoute={setRoute} chatName={chatName} info={info} />
            <MessageList />
            <NewMessageForm />
        </>
    );
}