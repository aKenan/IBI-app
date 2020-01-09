export interface ILoginModel{
    username: string;
    password:string;
}

export interface ILoginReturnModel{
    token: string;
    firstName: string;
    lastName: string;
    validTo: Date;
}