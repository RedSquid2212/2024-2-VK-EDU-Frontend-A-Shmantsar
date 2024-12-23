import { useState } from 'react';
import ClearHistoryButton from '../../components/ClearHistoryButton/ClearHistoryButton';
import HistoryCard from '../../components/HistoryCard/HistoryCard';
import HistoryPageHeader from '../../components/HistoryPageHeader/HistoryPageHeader';
import { LocalStorageService } from '../../services/localStorage.service';

export default function HistoryPage() {
    const localStorageService = new LocalStorageService();
    const [history, setHistory] = useState(localStorageService.getHistory());

    return (
        <div>
            <HistoryPageHeader />
            <ClearHistoryButton setHistory={setHistory} />
            {
                history?.history.map(item => (
                    <HistoryCard
                        fromLanguage={item.fromLanguage}
                        toLanguage={item.toLanguage}
                        initialText={item.initialText}
                        translatedText={item.translatedText}
                    />
                ))
            }
        </div>
    );
}
