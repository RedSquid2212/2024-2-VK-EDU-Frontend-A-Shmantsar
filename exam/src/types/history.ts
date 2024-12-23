export type HistoryItem = {
    fromLanguage: string;
    toLanguage: string;
    initialText: string;
    translatedText: string;
};

export type TranslatesHistory = {
    history: HistoryItem[];
};
