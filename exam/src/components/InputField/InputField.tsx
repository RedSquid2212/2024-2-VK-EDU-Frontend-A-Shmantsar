import { useEffect, useState } from 'react';
import TranslateUtils from '../../ts/utils';
import styles from './InputField.module.scss';

type InputFieldArgs = {
    setTranslatedText: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputField({ setTranslatedText }: InputFieldArgs) {
    const [text, setText] = useState('');
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);

        if (!event.target.value) {
            setTranslatedText('');
            return;
        }

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const id = setTimeout(() => {
            translateText(event.target.value);
        }, 1500);

        setTimeoutId(id);
    };

    const translateText = async (textToTranslate: string) => {
        try {
            const response = await TranslateUtils.translate({ text: textToTranslate });
            setTranslatedText(response ?? '');

        } catch (error) {
            console.error('Error during translation:', error);
        }
    };

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);
    return (
        <textarea className={styles['input-field']} onChange={(event) => handleChange(event)} value={text}/>
    );
}
