import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Basket from "../pages/basket/Basket.jsx";
import Wishlist from "../pages/wishlist/Wishlist.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Notfound from "../components/notfound/Notfound.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path='/' element={<Home/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                    <Route path='/wishlist' element={<Wishlist/>}/>
                    <Route path='/admin' element={<Admin/>}/>
                </Route>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router
