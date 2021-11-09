import { address } from "../address/address";
import { sale } from "../sale/sale";

export interface store{
    id:number;
    name:string;
    logo:string;
    address:address;
    country:string;
    state:string;
    town:string;
    postalCode:number;
    sales:sale[];
}