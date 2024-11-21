import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MessageList from '../../components/MessageList/MessageList';
import NewMessageForm from '../../components/NewMessageForm/NewMessageForm';

export default function ChatPage() {
    return (
        <>
            <ChatHeader />
            <MessageList />
            <NewMessageForm />
        </>
    );
}