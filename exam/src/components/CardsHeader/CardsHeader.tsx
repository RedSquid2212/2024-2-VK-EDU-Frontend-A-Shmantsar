import { useState } from 'react';
import { LangPair } from '../../types/langPair';
import LanguageCheckbox from '../LanguageCheckbox/LanguageCheckbox';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import SwapLanguagesButton from '../SwapLanguagesButton/SwapLanguagesButton';
import styles from './CardsHeader.module.scss';

type CardsHeaderArgs = {
    setLanguages: React.Dispatch<React.SetStateAction<LangPair>>;
}

export default function CardsHeader({ setLanguages }: CardsHeaderArgs) {
    const [activeFromLanguage, setActiveFromLanguage] = useState([true, false, false, false]);
    const [activeToLanguage, setActiveToLanguage] = useState([true, false, false]);
    const fromLanguages = ['DETECT LANGUAGE', 'GERMAN', 'ENGLISH', 'SPANISH'];
    const toLanguages = ['RUSSIAN', 'ENGLISH', 'SPANISH'];

    return (
        <div className={styles['cards-header']}>
            {
                fromLanguages.map((item, index) => (
                    <LanguageCheckbox
                        language={item}
                        isActive={activeFromLanguage[index]}
                        setIsActive={setActiveFromLanguage}
                        setLanguages={setLanguages}
                        languageType='from'
                        id={index}
                        key={index + 1}
                    />
                ))
            }
            <LanguagesSelect key='from' setLanguages={setLanguages} languageType='from' />
            <SwapLanguagesButton />
            {
                toLanguages.map((item, index) => (
                    <LanguageCheckbox
                        language={item}
                        isActive={activeToLanguage[index]}
                        setIsActive={setActiveToLanguage}
                        setLanguages={setLanguages}
                        languageType='to'
                        id={index}
                        key={index + 5}
                    />
                ))
            }
            <LanguagesSelect key='to' setLanguages={setLanguages} languageType='to' />
        </div>
    );
}
