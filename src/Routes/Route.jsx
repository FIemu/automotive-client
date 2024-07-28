import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MyCarts from "../Pages/MyCarts";
import AddProduct from "../Pages/AddProduct";
import ProductsSection from "../Components/Products/ProductsSection";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import EditProduct from "../Components/EditProduct/EditProduct";
import CartDetails from "../Components/CartDetails/CartDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import MainLayout from "../Pages/Layout/MainLayout";


const Route = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children: [
        {
            path:'/',
            element:<Home/>,
            errorElement:<ErrorPage/>,
            loader:()=> fetch('https://automotive-server-side-lqb36usn0-fiemus-projects.vercel.app/brands')
        },
        {
            path:'/myCarts',
            element:<PrivateRoutes><MyCarts/></PrivateRoutes>
        },
        {
            path:'/addProduct',
            element:<PrivateRoutes><AddProduct/></PrivateRoutes>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/productsSection/:id',
            element:<ProductsSection/>
        },
        {
            path:'/productDetails/:id',
            element:<PrivateRoutes><ProductDetails/></PrivateRoutes>
        },
        {
            path:'/cartDetails/:id',
            element:<CartDetails/>
        },
        {
            path:'/editProduct/:id',
            element:<PrivateRoutes><EditProduct/></PrivateRoutes>,
            loader:({params})=>fetch(`https://automotive-server-side-lqb36usn0-fiemus-projects.vercel.app/products/${params.id}`)
        },
    ],
  },
]);

export default Route;
