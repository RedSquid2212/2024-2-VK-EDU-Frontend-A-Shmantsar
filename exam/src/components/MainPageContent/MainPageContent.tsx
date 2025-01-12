import { useState } from 'react';
import CardsHeader from '../CardsHeader/CardsHeader';
import InputField from '../InputField/InputField';
import TranslationCard from '../TranslationCard/TranslationCard';
import styles from './MainPageContent.module.scss';
import { LangPair } from '../../types/langPair';

export default function MainPageContent() {
    const [translatedText, setTranslatedText] = useState('');
    const [languages, setLanguages] = useState<LangPair>({ fromLanguage: 'en', toLanguage: 'ru' });

    return (
        <main className={styles['main-content']}>
            <CardsHeader setLanguages={setLanguages} />
            <InputField
                setTranslatedText={setTranslatedText}
                fromLanguage={languages.fromLanguage}
                toLanguage={languages.toLanguage}
            />
            <TranslationCard text={translatedText} />
        </main>
    );
}
