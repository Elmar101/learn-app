import axios from "axios";
import { Product } from "../ecommerce-app/client/models/product";

export const fakeStoreProductsApi = async (): Promise< Product[]> => {
    const { data } = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return  data;
}

export const fetchProduct = async (id: string): Promise< Product > => {
    const { data } = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
    return data;
}