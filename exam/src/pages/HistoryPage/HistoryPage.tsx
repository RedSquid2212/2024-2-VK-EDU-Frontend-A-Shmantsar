import ClearHistoryButton from '../../components/ClearHistoryButton/ClearHistoryButton';
import HistoryCard from '../../components/HistoryCard/HistoryCard';
import HistoryPageHeader from '../../components/HistoryPageHeader/HistoryPageHeader';

export default function HistoryPage() {
    return (
        <div>
            <HistoryPageHeader />
            <ClearHistoryButton />
            <HistoryCard
                fromLanguage='русский'
                toLanguage='английский'
                initialText='поздравление с новым годом'
                translatedText='happy new year'
            />
        </div>
    );
}
