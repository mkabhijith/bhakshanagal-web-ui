export enum SupportedLanguage {
    ENGLISH, // 0 
    ARABIC, //1
    HINDI, //2
    MALAYALAM //3
}
export enum SupportedLanguageCode {
    ENGLISH = 'en',
    ARABIC = 'ar',
    HINDI = 'hi',
    MALAYALAM ='ml'
}

export interface ILanguage {
    id: SupportedLanguage;
    name: string;
    ERHL: string;
    ELHR: string;
    translation: string;
    direction: 'ltr' | 'rtl';
    code: SupportedLanguageCode;
}