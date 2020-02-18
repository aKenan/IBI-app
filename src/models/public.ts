export interface DllModel{
    vrijednost:number;
    naziv:string;
}

export interface IPoruka
{
    naziv: string;
    email: string;
    telefon: string;
    sadrzaj: string;
}

export interface INekretninaBasic
{
    id: number;
    naziv: string;
    opis: string;
    datum: Date;
    brojKvadrati: number;
    prodaja: boolean;
    najam: boolean;
    lokacija: string;
    slika: string;
}