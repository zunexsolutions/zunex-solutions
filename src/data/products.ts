import raw from './products.json'
export type Product={slug:string;name:string;category:string;tagline:string;summary:string;features:string[];who:string[];how:[string,string][];tech:string[];note?:string}
export const products=raw as unknown as Product[]
