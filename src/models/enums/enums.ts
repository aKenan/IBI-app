export enum TipSifarnikaEnum {
    StatusNekretnine = 1,
    TipNekretnine = 2,
    TipKontakta = 3
}
export enum StatusNekretnine {
    Aktivna = 1,
    Rezervisana,
    Prodana,
    Neaktivna
}

export enum TipVrijednosti {
    Tekst = 1,
    DaNe,
    Datum,
    CijeliBroj,
    DecimalnaVrijednost        
}

export enum TipNekretnine {
    Kuca = 1,
    Stan,
    Apartman,
    PoslovniProstor,
    Garaza
}
export enum TipKontakta {
    MobilniTelefon = 1,
    Email,
    Fax,
    FiksniTelefon,
    Skype
}

export enum Status {
    Aktivan = 1,
    Neaktivan,
    Obrisan
}

export enum NivoLokacije {
    Drzava = 0,
    Entitet = 1,
    Kanton_TeritorijalnaJedinica = 2,
    Opcina = 3
}