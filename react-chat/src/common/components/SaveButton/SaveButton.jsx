import CheckIcon from '@mui/icons-material/Check';
import styles from './SaveButton.module.scss';

export default function SaveButton({ onClick }) {
  return (
        <button type='button' className={styles['save-button']} onClick={onClick}>
            <CheckIcon />
        </button>
  );
}
