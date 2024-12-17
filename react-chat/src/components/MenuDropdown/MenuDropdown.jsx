import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import styles from './MenuDropdown.module.scss';

export default function MenuDropdown({ children }) {
  return (
    <div className={styles.dropdown}>
      {children}
      <div className={styles['dropdown-content']}>
        <Link to={'/profile/edit'} className={styles['edit-profile-link']}>
          <BorderColorIcon />
          Edit profile
        </Link>
      </div>
    </div>
  );
}
