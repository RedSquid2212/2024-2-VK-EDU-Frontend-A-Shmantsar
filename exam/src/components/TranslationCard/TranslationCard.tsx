import styles from './TranslationCard.module.scss';

type TranslationCardArgs = {
    text: string;
};

export default function TranslationCard({ text }: TranslationCardArgs) {
    return (
        <div className={styles.translation}>
            { text.length > 0 ? text : 'Translation' }
        </div>
    );
}
