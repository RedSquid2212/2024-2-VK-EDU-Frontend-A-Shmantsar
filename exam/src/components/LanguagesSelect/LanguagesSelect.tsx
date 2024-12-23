import styles from './LanguagesSelect.module.scss';
import { Languages } from '../../enums/languages';
import { LangPair } from '../../types/langPair';

type LanguagesSelectArgs = {
    setLanguages: React.Dispatch<React.SetStateAction<LangPair>>;
    languageType: 'from' | 'to';
};

export default function LanguagesSelect({ setLanguages, languageType }: LanguagesSelectArgs) {
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const isAutodetect = !value.includes('-');
        if (languageType === 'from') {
            setLanguages(prevState => ({
                ...prevState,
                fromLanguage: isAutodetect ? value : value.split('-')[0],
            }));
        } else {
            setLanguages(prevState => ({
                ...prevState,
                toLanguage: isAutodetect ? value : value.split('-')[0],
            }));
        }
    };

    return (
        <select
            className={styles.select}
            onChange={(event) => onChange(event)}
            defaultValue={languageType === 'from' ? 'en-GB' : 'ru-RU'}
        >
            {
                Object.keys(Languages).map(key => (
                    <option key={key} value={key}>{Languages[key as keyof typeof Languages]}</option>
                ))
            }
        </select>
    );
}
