export enum SupportedLanguage {
    ENGLISH, // 0 
    ARABIC, //1
    HINDI, //2
    MALAYALAM ,//3
    TAMIL //4
}
export enum SupportedLanguageCode {
    ENGLISH = 'en',
    ARABIC = 'ar',
    HINDI = 'hi',
    MALAYALAM ='ml',
    TAMIL ='ta'
}

export interface ILanguage {
    id: SupportedLanguage;
    name: string;
    ERHL: string;
    ELHR: string;
    translation: string;
    direction: 'ltr' | 'rtl';
    code: SupportedLanguageCode;
    image:string;
}