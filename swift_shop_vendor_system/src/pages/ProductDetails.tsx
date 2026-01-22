import { useState, useEffect } from "react";
import { getProductWithId } from "../Services/ProductService";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch,useSelector } from "react-redux";


function ProductDetails() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            setProduct(await getProductWithId(id))
        }
        fetchData()
    }, [id])
    return (
        <>
            <h1 className="flex justify-center">Product Details</h1>
                <div className="bg-white rounded-lg shadow-lg m-4 text-center">
                    <div className="p-4">
                        {product.Price > 500 && (
                            <span className=' rounded-full bg-blue-600 px-3 my-2 py-1 text-xs font-semibold text-white shadow '>
                                Premium</span>)
                        }
                        {product.Quantity < 5 && (
                            <span className='rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white shadow '>
                                Limited Quantity</span>
                        )}
                        <h5 className="font-bold mb-2 dark:bg-black">{product.title}</h5>
                        <p className="mb-2">Category: {product.category}</p>
                        <p className="mb-2">Availabel-Quantity: {product.stock}</p>
                        <p className="mb-2">Price: {product.price}</p>
                        <p className="mb-2">discountPercentage: {product.discountPercentage}</p>
                        <p className="mb-2">rating: {product.rating}</p>
                        <p className="mb-2">warrantyInformation: {product.warrantyInformation}</p>
                    </div>
                    <div className="flex justify-between p-4">
                        <button className="bg-gray-500 text-black m-2 px-4 py-2 " onClick={() => {
                           dispatch(addToCart(product)) 
                            navigate(`/product/${product.id}/customiz`)}}>Add to cart</button>
                    </div>
                </div>
        </>
    )
}

export default ProductDetails
