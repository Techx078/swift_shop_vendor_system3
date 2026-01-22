import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Products from "./pages/Products.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import ProductCustomize from "./pages/ProductCustomize.tsx";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage"
import Cart from "./pages/Cart.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "products",
        element: <Products />,
        errorElement:<ErrorPage />
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "product/:id/customiz",
        element: <ProductCustomize />,
      },
      {
        path:"cart",
        element:<Cart />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element:<ErrorPage />
      }
    ],
  },
]);

export default router;