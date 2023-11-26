import { ILanguage, SupportedLanguage } from "./language.type";

export enum orginCountry {
    INDIA, // 0
    UAE, // 1
    UK, // 2
    USA, //3
    AUSTRALIA,// 4
    
}



export interface ICountry {
    id :orginCountry;
    name : string;
    currency : string ;
    flag : string;
    exchangeRate :number;
    languages : ILanguage[]
}
