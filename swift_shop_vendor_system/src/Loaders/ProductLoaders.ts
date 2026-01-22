import { getAllProduct } from "../Services/ProductService"
export default async function ProductLoader(){
    const products = await getAllProduct();
    return products;
}