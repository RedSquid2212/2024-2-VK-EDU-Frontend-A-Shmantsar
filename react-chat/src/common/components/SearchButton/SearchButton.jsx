import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchButton.module.scss';

export default function SearchButton() {
  return (
    <button className={styles['search-button']}>
      <SearchIcon />
    </button>
  );
}
