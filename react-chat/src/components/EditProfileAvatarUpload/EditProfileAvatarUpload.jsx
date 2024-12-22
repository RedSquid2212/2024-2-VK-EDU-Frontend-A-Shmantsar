import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import styles from './EditProfileAvatarUpload.module.scss';

export default function EditProfileAvatarUpload() {
  return (
        <div>
            <input id="upload" className={styles.upload} type='file' />
            <label htmlFor="upload" className={styles['upload-button']}>
                <PhotoCameraIcon fontSize='inherit' />
            </label>
        </div>
  );
}
