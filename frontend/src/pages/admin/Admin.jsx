import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getProductsThunk} from "../../redux/reducers/productSlice.js";
import Form from "./components/form/Form.jsx";
import BackCard from "../../components/backCard/BackCard.jsx";
import {Helmet} from "react-helmet-async";

const Admin = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.products.products)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch])

    return (
        <div>
            <Helmet title="Admin" />
            <Form/>
            <BackCard data={data} where={'admin'}/>
        </div>
    )
}
export default Admin
