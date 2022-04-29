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

export const deleteProduct = async (id: number): Promise<Product> => {
    const {data} = await axios.delete(`https://fakestoreapi.com/products/${id}`);
    return data;
}

export const updateProduct = async (id: string , input: Partial<Product>):Promise< Product > => {
    const {data} = await axios.put(`https://fakestoreapi.com/products/${id}`, input);
    return data;
}

export const uploadNewProduct = async (input: Partial<Product>):Promise< Product > => {
    const {data} = await axios.post(`https://fakestoreapi.com/products`, input);
    return data;
}