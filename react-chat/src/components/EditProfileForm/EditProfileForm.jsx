import EditProfileAvatarUpload from '../EditProfileAvatarUpload/EditProfileAvatarUpload';
import EditProfileInput from '../EditProfileInput/EditProfileInput';
import styles from './EditProfileForm.module.scss';

export default function EditProfileForm() {
  return (
        <form className={styles['edit-profile-form']}>
          <EditProfileAvatarUpload />
          <EditProfileInput label={'Full name'} id={'full-name'} />
          <EditProfileInput
            label={'Username'}
            id={'username'}
            info={'Minimum length is 5 characters'}
            minLength={5}
          />
          <EditProfileInput
            isTextArea={true}
            label={'Bio'}
            id={'textarea'}
            info={'Any details about you'}
          />
        </form>
  );
}
