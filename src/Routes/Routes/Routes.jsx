import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products ";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
      },
    ],
  },
]);
export default routes;
