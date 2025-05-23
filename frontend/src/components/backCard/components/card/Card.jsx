import React from 'react'
import styles from './Card.module.scss'
import {useDispatch} from "react-redux";
import {deleteBasketThunk, postBasketThunk} from "../../../../redux/reducers/basketSlice.js";
import {deleteWishlistThunk, postWishlistThunk} from "../../../../redux/reducers/wishlistSlice.js";
import {deleteProductThunk} from "../../../../redux/reducers/productSlice.js";

const Card = ({item, where}) => {

    const dispatch = useDispatch()

    const addToBasket = (count) => {
        const data = {
            it: item.it,
            name: item.name,
            price: item.price,
            image: item.image,
            count: count,
        }
        dispatch(postBasketThunk(data))
    }

    const addToWishlist = () => {
        dispatch(postWishlistThunk(item))
    }

    const deleteWishlist = () => {
        dispatch(deleteWishlistThunk(item._id))
    }

    const deleteBasket = () => {
        dispatch(deleteBasketThunk(item._id))
    }

    const deleteAdmin = () => {
        dispatch(deleteProductThunk(item._id))
    }

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={item.image} alt={item.name}/>
            </div>
            <div className={styles.desc}>
                <p id={styles.name}>
                    {item.name}
                </p>
                <p id={styles.price}>
                    ${item.price}
                </p>
            </div>

            {where === 'basket' ? <p>{item.count}</p> : null}
            {where === 'home' ? <div>
                <button style={{padding: "10px 20px"}} onClick={() => addToBasket("1")}>Add to basket</button>
                <button style={{padding: "10px 20px"}} onClick={() => addToWishlist()}>Add to wishlist</button>
            </div> : null}
            {where === 'basket' ? <div>
                <button onClick={() => addToBasket("1")}>Add</button>
                {item.count !== "1" ? <button onClick={() => addToBasket("-1")}>Decrease</button> : null}
            </div> : null}

            {where === 'basket' ? <button onClick={() => deleteBasket()}>Delete</button> : null}
            {where === 'wishlist' ? <button onClick={() => deleteWishlist()}>Delete</button> : null}
            {where === 'admin' ? <button onClick={() => deleteAdmin()}>Delete</button> : null}

        </div>
    )
}
export default Card
