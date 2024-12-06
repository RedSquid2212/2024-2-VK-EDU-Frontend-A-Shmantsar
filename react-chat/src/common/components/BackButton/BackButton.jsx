import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './BackButton.module.scss';

export default function BackButton ({ onClick }) {
  return (
    <button className={styles['back-button']} onClick={onClick}>
      <ArrowBackIcon />
    </button>
  );
}
