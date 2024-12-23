import CardsHeader from '../CardsHeader/CardsHeader';
import InputField from '../InputField/InputField';
import TranslationCard from '../TranslationCard/TranslationCard';
import styles from './MainPageContent.module.scss';

export default function MainPageContent() {
    return (
        <main className={styles['main-content']}>
            <CardsHeader />
            <InputField />
            <TranslationCard />
        </main>
    );
}
