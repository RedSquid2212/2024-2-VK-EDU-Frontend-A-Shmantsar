import AllChatsHeader from '../../components/AllChatsHeader/AllChatsHeader';
import ChatsList from '../../components/ChatsList/ChatsList';

export default function AllChatsPage ({ setRoute, setChatInfo }) {
  return (
    <>
      <AllChatsHeader />
      <ChatsList setRoute={setRoute} setChatInfo={setChatInfo} />
    </>
  );
}
