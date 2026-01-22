import { getProductWithId } from "../Services/ProductService";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

function ProductDetails() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams();
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProductWithId(id),
    })

    if (isLoading) return <div>loading...</div>

    if (isError) {
        navigate("*")
    }
    return (
        <>
            {!isLoading && console.log(data)}
            <h1 className="flex justify-center">Product Details</h1>
            <div className="bg-white rounded-lg shadow-lg m-4 text-center">
                <div className="p-4">
                    {data.Price > 500 && (
                        <span className=' rounded-full bg-blue-600 px-3 my-2 py-1 text-xs font-semibold text-white shadow '>
                            Premium</span>)
                    }
                    {data.Quantity < 5 && (
                        <span className='rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white shadow '>
                            Limited Quantity</span>
                    )}
                    <h5 className="font-bold mb-2 dark:bg-black">{data.title}</h5>
                    <p className="mb-2">Category: {data.category}</p>
                    <p className="mb-2">Availabel-Quantity: {data.stock}</p>
                    <p className="mb-2">Price: {data.price}</p>
                    <p className="mb-2">discountPercentage: {data.discountPercentage}</p>
                    <p className="mb-2">rating: {data.rating}</p>
                    <p className="mb-2">warrantyInformation: {data.warrantyInformation}</p>
                </div>
                <div className="flex justify-between p-4">
                    <button className="bg-gray-500 text-black m-2 px-4 py-2 " onClick={() => {
                        dispatch(addToCart(data))
                        navigate(`/product/${data.id}/customiz`)
                    }}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
