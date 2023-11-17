export enum SupportedLanguage {
    ENGLISH, // 0
    HEBREW, // 1
    ARABIC
}
export enum SupportedLanguageCode {
    ENGLISH = 'en',
    HEBREW = 'he',
    ARABIC = 'ar'
}

export interface ILanguage {
    id: SupportedLanguage;
    name: string;
    flag: string;
    ERHL: string;
    ELHR: string;
    translation: string;
    direction: 'ltr' | 'rtl';
    code: SupportedLanguageCode;
}