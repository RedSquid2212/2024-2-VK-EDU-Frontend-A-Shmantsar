import LanguageCheckbox from '../LanguageCheckbox/LanguageCheckbox';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import SwapLanguagesButton from '../SwapLanguagesButton/SwapLanguagesButton';
import styles from './CardsHeader.module.scss';

export default function CardsHeader() {
    return (
        <div className={styles['cards-header']}>
            <LanguageCheckbox language='DETECT LANGUAGE'/>
            <LanguageCheckbox language='GERMAN'/>
            <LanguageCheckbox language='ENGLISH'/>
            <LanguageCheckbox language='SPANISH'/>
            <LanguagesSelect />
            <SwapLanguagesButton />
            <LanguageCheckbox language='RUSSIAN'/>
            <LanguageCheckbox language='ENGLISH'/>
            <LanguageCheckbox language='SPANISH'/>
            <LanguagesSelect />
        </div>
    );
}
