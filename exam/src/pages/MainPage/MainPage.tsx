import HistoryButton from '../../components/HistoryButton/HistoryButton';
import MainPageContent from '../../components/MainPageContent/MainPageContent';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';
import TranslateTextButton from '../../components/TranslateTextButton/TranslateTextButton';

export default function MainPage() {
    return (
        <div>
            <MainPageHeader />
            <TranslateTextButton />
            <MainPageContent />
            <HistoryButton />
        </div>
    );
}
