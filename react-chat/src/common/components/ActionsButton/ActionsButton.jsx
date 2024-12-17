import styles from './ActionsButton.module.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ActionsButton() {
  return (
    <button className={styles['menu-button']}>
      <MoreVertIcon />
    </button>
  );
}
