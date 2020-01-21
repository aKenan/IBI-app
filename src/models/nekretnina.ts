export interface ILokacija
    {
        id: number;
        naziv: string;
        lokacijaParentId?: number;
        nivo: number; //sif
        zadnjiNivo: boolean;  
        nazivFull: string;      
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
    naziv?: string;
    opis?: string;
    obavezan?: boolean;
    mjernaJedinica?: string;
    prikaziUFilteru?: boolean | null;
    tipVrijednosti?: number;
    aktivan: boolean;
}

export interface INekretnina
{
    id: number;
    oznakaNekretnine?: string;
    naziv?: string;
    opisKratko?: string;
    opisDetaljno?: string;
    adresa?: string;
    datumKreiranja?: Date;
    datumIzmjene?: Date;
    vaziOd?: Date;
    vaziDo?: Date;
    tipNekretnine?: number; //sif = 2
    statusNekretnine?: number; //status nekretnine sif = 1
    prodaja?: boolean;
    najam?: boolean;
    lokacijaId?: number;
    aktivan?: boolean;
    tipNekretnineText?:string;

    kontakti?: IKontakt[];
    lokacija?: ILokacija;
}