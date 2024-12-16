import { useNavigate } from 'react-router-dom';
import BackButton from '../../common/components/BackButton/BackButton';
import SaveButton from '../../common/components/SaveButton/SaveButton';
import styles from './EditProfileHeader.module.scss';

export default function EditProfileHeader() {
  const navigate = useNavigate();
  const onBackButtonClick = () => navigate('/');
  return (
        <header className={styles.header}>
            <BackButton onClick={onBackButtonClick} />
            <div className={styles.title}>
                Edit Profile
            </div>
            <SaveButton onClick={onBackButtonClick} />
        </header>
  );
}
