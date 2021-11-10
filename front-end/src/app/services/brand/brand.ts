import { product } from "../product/product";

export interface brand{
    id: number;
    name: string;
    products: product[];
}