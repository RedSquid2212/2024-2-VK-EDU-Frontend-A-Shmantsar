import { LangPair } from '../../types/langPair';
import LanguageCheckbox from '../LanguageCheckbox/LanguageCheckbox';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import SwapLanguagesButton from '../SwapLanguagesButton/SwapLanguagesButton';
import styles from './CardsHeader.module.scss';

type CardsHeaderArgs = {
    setLanguages: React.Dispatch<React.SetStateAction<LangPair>>;
}

export default function CardsHeader({ setLanguages }: CardsHeaderArgs) {
    return (
        <div className={styles['cards-header']}>
            <LanguageCheckbox language='DETECT LANGUAGE'/>
            <LanguageCheckbox language='GERMAN'/>
            <LanguageCheckbox language='ENGLISH'/>
            <LanguageCheckbox language='SPANISH'/>
            <LanguagesSelect key='from' setLanguages={setLanguages} languageType='from' />
            <SwapLanguagesButton />
            <LanguageCheckbox language='RUSSIAN'/>
            <LanguageCheckbox language='ENGLISH'/>
            <LanguageCheckbox language='SPANISH'/>
            <LanguagesSelect key='to' setLanguages={setLanguages} languageType='to' />
        </div>
    );
}
