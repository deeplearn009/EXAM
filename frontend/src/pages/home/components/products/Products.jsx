import React, {useEffect} from 'react'
import styles from './Products.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getProductsThunk} from "../../../../redux/reducers/productSlice.js";
import BackCard from "../../../../components/backCard/BackCard.jsx";

const Products = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Our Products</h1>
            </div>
            <div className={styles.content}>
                <BackCard data={data} where={'home'}/>
            </div>
        </div>
    )
}
export default Products
