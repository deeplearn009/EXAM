import React from 'react'
import {useDispatch} from "react-redux";
import * as Yup from 'yup';
import {useFormik} from "formik";
import {postProductThunk} from "../../../../redux/reducers/productSlice.js";
import styles from './Form.module.scss'

const Form = () => {

    const dispatch = useDispatch()

    const valSchema = Yup.object({
        name: Yup.string().required("Name is required").min(3, "Enter a valid name."),
        price: Yup.string().required("Price is required").min(1, "Enter a valid price."),
        image: Yup.string().required("Image is required").min(6, "Enter a valid image."),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            image: '',
            it: ''
        },
        valSchema,
        onSubmit: values => {
            const data = {
                ...values,
                it: String("item" + Math.random() * 6060)
            }
            dispatch(postProductThunk(data))
            formik.handleReset()
        },
    });

    return (
        <div className={styles.container}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    {...formik.getFieldProps("name")}
                />
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    {...formik.getFieldProps("price")}

                />
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    {...formik.getFieldProps("image")}

                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form
