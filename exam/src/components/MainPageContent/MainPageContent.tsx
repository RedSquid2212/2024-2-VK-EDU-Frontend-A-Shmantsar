import { useState } from 'react';
import CardsHeader from '../CardsHeader/CardsHeader';
import InputField from '../InputField/InputField';
import TranslationCard from '../TranslationCard/TranslationCard';
import styles from './MainPageContent.module.scss';

export default function MainPageContent() {
    const [translatedText, setTranslatedText] = useState('');

    return (
        <main className={styles['main-content']}>
            <CardsHeader />
            <InputField setTranslatedText={setTranslatedText} />
            <TranslationCard text={translatedText} />
        </main>
    );
}
