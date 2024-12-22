import { TranslateArgs } from './types';
import { buildApiUrl, buildCacheKey, getErrorText, isCached } from './utils';

const cache = new Map<string, string>();

export async function translate({text, fromLanguage = 'en', toLanguage = 'ru'}: TranslateArgs) {
    const errorText = getErrorText(text, fromLanguage, toLanguage);
    if (errorText.length > 0) {
        throw Error(errorText);
    }
    const isQueryCached = isCached(cache, text, fromLanguage, toLanguage);
    const cacheKey = buildCacheKey(text, fromLanguage, toLanguage);
    if (isQueryCached) {
        return cache.get(cacheKey);
    }
    try {
        const api = buildApiUrl(text, fromLanguage, toLanguage);
        const response = await fetch(api).then(response => response.json());

        if (response.responseStatus !== 200) {
            throw Error (`Произошла ошибка при попытке запроса: ${response.responseStatus}`);
        }

        const translatedText: string = response.responseData.translatedText;
        cache.set(cacheKey, translatedText);

        return translatedText;
    } catch (error) {
        throw Error(`Произошла ошибка: ${error}`);
    }
}