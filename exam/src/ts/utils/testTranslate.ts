import { translate } from './translate';

const testTranslate = async () => {
    try {
        const withoutLangPair = await translate({ text: 'Hello!' });
        const withLangPair = await translate({ text: 'Hola!', fromLanguage: 'es', toLanguage: 'ru'});
        console.log(withoutLangPair);
        console.log(withLangPair);
    } catch (error) {
        console.error(error);
    }
}

export default testTranslate;