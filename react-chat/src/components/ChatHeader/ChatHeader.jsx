import ActionsButton from '../../common/components/ActionsButton/ActionsButton';
import Avatar from '../../common/components/Avatar/Avatar';
import BackButton from '../../common/components/BackButton/BackButton';
import SearchButton from '../../common/components/SearchButton/SearchButton';
import styles from './ChatHeader.module.scss';

export default function ChatHeader ({ chatName, info, setRoute }) {
  return (
    <header className={styles.header}>
      <BackButton onClick={() => setRoute('home')} />
      <Avatar chatName={chatName} info={info} />
      <div className={styles['header-buttons']}>
        <SearchButton />
        <ActionsButton />
      </div>
    </header>
  );
}
