import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1 className="flex justify-center">Cart </h1>
        {items.map((product, index) => (
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
              <h5 className="font-bold mb-2 dark:bg-black">{product.title}</h5>
              <p className="mb-2">Category: {product.category}</p>
              <p className="mb-2">Quantity: {product.quantity}</p>
              <p className="mb-2">Price: {product.price}</p>
            </div>
            <div className="flex justify-between p-4">
              <button className="bg-gray-500 text-black m-2 px-4 py-2 " onClick={() => navigate(`/product/${product.ProductId}`)}>view in detail</button>
              <button className="bg-gray-500 text-black m-2 px-4 py-2 " onClick={() => {
                navigate(`/product/${product.id}/customiz`)
              }}>Cuatomize</button>
            </div>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart;
