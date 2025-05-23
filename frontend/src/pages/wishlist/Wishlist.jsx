import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getWishlistThunk} from "../../redux/reducers/wishlistSlice.js";
import BackCard from "../../components/backCard/BackCard.jsx";
import {Helmet} from "react-helmet-async";

const Wishlist = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.wishlist.wishlist)

    useEffect(() => {
        dispatch(getWishlistThunk())
    }, [dispatch])

    return (
        <div>
            <Helmet title="Wishlist" />
            <BackCard data={data} where={'wishlist'}/>
        </div>
    )
}
export default Wishlist
