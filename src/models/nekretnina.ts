export interface ILokacija
    {
        id: number;
        naziv: string;
        lokacijaParentId?: number;
        nivo: number; //sif
        zadnjiNivo: boolean;        
    }

export interface IKontakt
{
    id: number;
    nekretninaId: number;
    tipKontakta: number;
    vrijednost: string;
    aktivan: boolean;
}

export interface IOpisNekretnine
{
    id: number;
    naziv: string;
    opis: string;
    obavezan: boolean;
    mjernaJedinica: string;
    prikaziUFilteru: boolean | null;
    tipVrijednosti: number;
    aktivan: boolean;
}

export interface INekretnina
{
    id: number;
    naziv: string;
    opisKratko: string;
    opisDetaljno: string;
    adresa: string;
    datumKreiranja: Date;
    datumIzmjene?: Date;
    vaziOd: Date;
    vaziDo: Date;
    tipNekretnine: number;
    statusNekretnine: number; //status nekretnine
    prodaja: boolean;
    najam: boolean;
    lokacijaId: number;
    aktivan: boolean;

    kontakti: IKontakt[];
    lokacija: ILokacija;
}