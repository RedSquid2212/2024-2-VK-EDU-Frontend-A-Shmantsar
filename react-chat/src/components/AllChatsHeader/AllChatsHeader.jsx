import MenuButton from '../../common/components/MenuButton/MenuButton';
import SearchButton from '../../common/components/SearchButton/SearchButton';
import styles from './AllChatsHeader.module.scss';

export default function AllChatsHeader () {
  return (
    <header className={styles.header}>
      <MenuButton />
      <div className={styles.title}>
        Messanger
      </div>
      <SearchButton />
    </header>
  );
}
