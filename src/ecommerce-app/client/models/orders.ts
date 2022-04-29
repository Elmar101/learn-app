import { Product } from './product';
export interface Orders {
    user: string;
    adress: string;
    product: Product;
    createDate?: Date | string;
    quantity: number
}