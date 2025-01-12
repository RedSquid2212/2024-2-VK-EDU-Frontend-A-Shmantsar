import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styles from './HistoryCard.module.scss';

type HistoryCardArgs = {
    fromLanguage: string;
    toLanguage: string;
    initialText: string;
    translatedText: string;
}

export default function HistoryCard({ fromLanguage, toLanguage, initialText, translatedText }: HistoryCardArgs) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles['lang-pair']}>
                    <span>{fromLanguage}</span>
                    <ArrowRightAltIcon />
                    <span>{toLanguage}</span>
                </div>
                <span>{initialText}</span>
                <span className={styles.translated}>{translatedText}</span>
            </div>
            <hr />
        </>
    );
}
