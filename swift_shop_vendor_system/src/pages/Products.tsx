import { useEffect, useState } from "react";
import { getAllProduct } from "../Services/ProductService";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
interface ProductType {
    ProductId: number;
    Name: string;
    Price: number;
    Quantity: number;
    Category: string;
}
function Products() {
    const products = useLoaderData()
    const navigate = useNavigate()
    const [productList, setProductList] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            let mapData = products.products.map(
                product => {
                    return {
                        ProductId: product.id,
                        Name: product.title,
                        Price: product.price,
                        Quantity: product.stock,
                        Category: product.category
                    }
                }
            )
            setProductList(mapData)
        }
        fetchData()
    }, [])

    return (
        <>
            <div>
                <h1 className="flex justify-center">Product</h1>
                {productList.map((product, index) => (
                    <div key={product.ProductId} className="bg-white rounded-lg shadow-lg m-4 text-center">
                        <div className="p-4">
                            {product.Price > 500 && (
                                <span className=' rounded-full bg-blue-600 px-3 my-2 py-1 text-xs font-semibold text-white shadow '>
                                    Premium</span>)
                            }
                            {product.Quantity < 5 && (
                                <span className='rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white shadow '>
                                    Limited Quantity</span>
                            )}
                            <h5 className="font-bold mb-2 dark:bg-black">{product.Name}</h5>
                            <p className="mb-2">Category: {product.Category}</p>
                            <p className="mb-2">Quantity: {product.Quantity}</p>
                            <p className="mb-2">Price: {product.Price}</p>
                        </div>
                        <div className="flex justify-between p-4">
                            <button className="bg-gray-500 text-black m-2 px-4 py-2 " onClick={() => navigate(`/product/${product.ProductId}`)}>view in detail</button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Products
