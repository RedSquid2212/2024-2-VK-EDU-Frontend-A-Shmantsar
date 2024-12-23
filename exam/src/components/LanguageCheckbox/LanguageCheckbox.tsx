type LanguageCheckboxArgs = {
    language: string;
};

export default function LanguageCheckbox({ language }: LanguageCheckboxArgs) {
    return (
        <div>
            { language }
        </div>
    );
}
