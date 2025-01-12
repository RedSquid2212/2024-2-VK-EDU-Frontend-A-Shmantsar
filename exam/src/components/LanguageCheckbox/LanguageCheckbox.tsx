import { LangPair } from '../../types/langPair';
import styles from './LanguageCheckbox.module.scss';

type LanguageCheckboxArgs = {
    language: string;
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean[]>>;
    id: number;
    setLanguages: React.Dispatch<React.SetStateAction<LangPair>>;
    languageType: 'from' | 'to';
};

export default function LanguageCheckbox({ language, isActive, setIsActive, id, setLanguages, languageType }: LanguageCheckboxArgs) {
    const languageToCode: Record<string, string> = {
        'DETECT LANGUAGE': 'Autodetect',
        'GERMAN': 'de',
        'ENGLISH': 'en',
        'SPANISH': 'es',
        'RUSSIAN': 'ru',
    };

    const handleCheckboxClick = () => {
        setIsActive(prevState => {
            if (prevState[id]) {
                return prevState;
            }
            const result = prevState.map(() => false);
            result[id] = !isActive;
            return result;
        });
        setLanguages(prevState => {
            if (languageType === 'from') {
                return {
                    ...prevState,
                    fromLanguage: languageToCode[language],
                };
            }
            return {
                ...prevState,
                toLanguage: languageToCode[language],
            }
        })
    };

    return (
        <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`} onClick={handleCheckboxClick}>
            { language }
        </div>
    );
}
