
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
} from "react-router-dom";
import AddCaterory from "./component/Admin/AddCaterory";
import AddProduct from "./component/Admin/AddProduct";
import CategoryEdit from "./component/Admin/CategoryEdit";
import Dashboard from "./component/Admin/Dashboard";
import ProductEdit from "./component/Admin/ProductEdit";
import UpdateproductQuaintity from "./component/Admin/UpdateproductQuaintity";
import Cart from "./component/Cart/Cart";
import Error from "./component/Error/Error";
import Pdp from "./component/Productdisplay/Pdp";
import CreateAccount from "./component/UserSignIn/CreateAccount";
import Exclusive from "./component/UserSignIn/Exclusive";
import HomePage from "./Pages/Homepage";
import PLP from "./Pages/PLP";
import UserLogin from "./Pages/UserLogin";


const router = createBrowserRouter([
    {
        path: '/abc',
        element: <><div>
            hello
        </div></>
    },
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "*",
        element: <Error />,
    },
    {
        path: "/login",
        element: <UserLogin />,
    },
    {
        path: "/register",
        element: < CreateAccount />,
    },
    {
        path: "/admin_453@565",
        element: <Exclusive />,
    },
    {
        path: '/admin_453@565/dashboard',
        element: <Dashboard />,
    },
    {
        path: "/plp/:id",
        element: <PLP />,
    },
    {
        path: "/pdp/:id",
        element: <Pdp />,
    },
    {
        path: "/admin_453@565/product",
        element: <ProductEdit />,
    },
    {
        path: "/admin_453@565/category",
        element: <CategoryEdit />,
    },
    {
        path: '/admin_453@565/addpproduct',
        element: <AddProduct />,
    },
    {
        path: '/admin_453@565/addcategory',
        element: <AddCaterory />,
    },
    {
        path: '/admin_453@565/updatequanitity',
        element: <UpdateproductQuaintity />,
    },
    {
        path: '/checkout/cart',
        element: <Cart />,
    },

]);

export default router