import styles from './EditProfileInput.module.scss';

export default function EditProfileInput({ label, isTextArea, id, info, minLength }) {
  return (
    <div className={styles['floating-label']}>
      {
        isTextArea
          ? (
            <>
              <textarea
                id={id}
                className={styles.textarea}
                autoComplete='off'
                placeholder={label}
              />
            </>
            )
          : (
            <>
              <input
                className={styles.input}
                type='text'
                id={id}
                autoComplete='off'
                placeholder={label}
                minLength={minLength}
              />
            </>
            )
      }
      <span className={styles.info}>{info}</span>
    </div>
  );
}
