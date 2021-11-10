import { brand } from "../brand/brand";

export interface product{
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    brandId: number;
    brand: brand;
}