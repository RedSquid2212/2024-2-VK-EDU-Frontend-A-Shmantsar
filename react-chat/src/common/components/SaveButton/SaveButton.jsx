import CheckIcon from '@mui/icons-material/Check';
import styles from './SaveButton.module.scss';

export default function SaveButton() {
  return (
        <button type='button' className={styles['save-button']}>
            <CheckIcon />
        </button>
  );
}
