import { address } from "../address/address";
import { sale } from "../sale/sale";

export interface customer{
    id:number;
    firstName:string;
    lastName:string;
    phoneNumber:string;
    email:string;
    DNI:number;
    birthDate:Date;
    addresses: address[];
    sales:sale[];
}