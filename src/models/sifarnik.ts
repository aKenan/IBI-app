import { TipSifarnikaEnum } from "./enums/enums";

export interface ISifarnik{
    id: number;
    tipSifarnikaId: TipSifarnikaEnum;
    naziv: string;
    vrijednost: number;
}