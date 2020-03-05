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
    tipVrijednostiText?: string;
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
    lat?: number;
    lon?: number;
    izdvojena?: boolean;
    kontakti?: IKontakt[];
    lokacija?: ILokacija;
}

export interface INekretninaOpisNekretnine
{
    id: number;
    nekretninaId: number;
    opisId: number;
    vrijednost: string;
    aktivan: boolean;
    opisNekretnine?: IOpisNekretnine;
}

export interface IUcitanaSlika
{
    file: File;
    content: any;
}

export interface ISlikeSadrzaj{
    file:any;
    id: Number;
}

export interface ISlika
{
    id: number;
    redniBroj: number;
    glavna: boolean;
    aktivan: boolean;
    content: any;
}

export interface IIzdvojenaNekretninaViewModel
{
    nekretninaId: number;
    datumKreiranja?: Date;
    vaziOd?: Date;
    vaziDo?: Date;
    aktivan?: boolean;

    nekretnina?: INekretnina;
}

export interface IOpciPodaci
{
    novePoruke: number;
    aktivne: number;
    naPonudi: number;
    prodane: number;    
    brojIsteklih:number;
    brojIzdvojenih:number;    
}