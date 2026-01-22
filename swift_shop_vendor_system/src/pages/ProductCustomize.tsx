import { useState, useEffect } from "react";
import { getProductWithId } from "../Services/ProductService";
import { useNavigate, useParams } from "react-router-dom";
import { updateQuantity } from "../redux/cartSlice";
import { useDispatch } from "react-redux"
import { useQuery } from "@tanstack/react-query";
function ProductCustomize() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductWithId(id),
  })

  const addToCartHandle = () => {
    dispatch(updateQuantity({ id: data.id, quantity }));
    navigate(`/cart`);
  }

  if (isLoading) return <div>loading...</div>

  if (isError) {
    navigate("*")
  }
  return (
    <>
      <h1 className="flex justify-center">Add product Quantity</h1>
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

        <div className="w-1/2 ml-[200px] ">
          <label className="block text-gray-700 mb-1">Quantity</label>
          <input
            type="Number"
            name="Quantity"
            value={quantity}
            onChange={handleChange}
            placeholder="Enter Quantity"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between p-4">
          <button className="bg-gray-500 text-black m-2 px-4 py-2 " onClick={addToCartHandle}>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductCustomize
