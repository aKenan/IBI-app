import { INekretnina } from "./nekretnina";

export interface IPorukaAdmin
{
    id: number;
    naziv: string;
    telefon: string;
    email: string;
    sadrzaj: string;
    odgovorena: boolean;
    procitana: boolean;
    nekretninaId: number;
    nekretnina: INekretnina;
    datumKreiranja: Date;
}