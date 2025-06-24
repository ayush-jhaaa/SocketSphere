import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignIn from "../Components/Signin/SignIn";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path="" element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="sign-in" element={<SignIn/>} />
        </Route>
    )
)

export default router
