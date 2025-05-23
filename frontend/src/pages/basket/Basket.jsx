import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import BackCard from "../../components/backCard/BackCard.jsx";
import {getBasketThunk} from "../../redux/reducers/basketSlice.js";
import {Helmet} from "react-helmet-async";

const Basket = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.basket.basket);

    useEffect(() => {
        dispatch(getBasketThunk())
    }, [dispatch]);

    return (
        <div>
            <Helmet title="Basket" />
            <BackCard data={data} where={'basket'}/>
        </div>
    )
}
export default Basket
