export function isCached(
    cache: Map<string, string>,
    text: string,
    fromLanguage: string,
    toLanguage: string
): boolean {
    const cacheKey = buildCacheKey(text, fromLanguage, toLanguage);
    return !!cache.get(cacheKey);
}

export function buildApiUrl(query: string, fromLanguage: string, toLanguage: string): string {
    return `https://api.mymemory.translated.net/get?q=${query}&langpair=${fromLanguage}|${toLanguage}`;
}

export function buildCacheKey(text: string, fromLanguage: string, toLanguage: string): string {
    return `${text}|${fromLanguage}|${toLanguage}`;
}

export function getErrorText(text: string, fromLanguage: string, toLanguage: string): string {
    if (!text) {
        return 'Введите текст для перевода';
    }
    if (!fromLanguage || !toLanguage) {
        return 'Задайте пару языков для перевода: откуда и куда переводить';
    }
    return '';
}