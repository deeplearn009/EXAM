import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getProductsThunk} from "../../redux/reducers/productSlice.js";
import WBanner from "./components/wBanner/WBanner.jsx";
import Features from "./components/features/Features.jsx";
import Products from "./components/products/Products.jsx";
import IconBanner from "./components/iconBanner/IconBanner.jsx";
import Blog from "./components/blog/Blog.jsx";
import {Helmet} from "react-helmet-async";

const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch]);

    return (
        <div>
            <Helmet title="Home" />
            <WBanner/>
            <Features/>
            <Products/>
            <IconBanner/>
            <Blog/>
        </div>
    )
}
export default Home
