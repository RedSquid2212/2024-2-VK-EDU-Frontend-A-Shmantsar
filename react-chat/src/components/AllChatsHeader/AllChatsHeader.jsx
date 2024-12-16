import MenuButton from '../../common/components/MenuButton/MenuButton';
import SearchButton from '../../common/components/SearchButton/SearchButton';
import MenuDropdown from '../MenuDropdown/MenuDropdown';
import styles from './AllChatsHeader.module.scss';

export default function AllChatsHeader() {
  return (
    <header className={styles.header}>
      <MenuDropdown>
        <MenuButton />
      </MenuDropdown>
      <div className={styles.title}>
        Messanger
      </div>
      <SearchButton />
    </header>
  );
}
