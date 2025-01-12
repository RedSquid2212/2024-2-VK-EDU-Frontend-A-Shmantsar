import { TranslatesHistory } from '../types/history';

export class LocalStorageService {
    private readonly key = 'history';

    public getHistory(): TranslatesHistory | null {
        const item = window.localStorage.getItem(this.key);
        if (!item) {
            return null;
        }
        return JSON.parse(item) as TranslatesHistory;
    }

    public setHistory(history: TranslatesHistory): void {
        window.localStorage.setItem(this.key, JSON.stringify(history));
    }

    public clearHistory(): void {
        window.localStorage.removeItem(this.key);
    }
}