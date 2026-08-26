import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProduct} from "../feature/productThunk";

const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProduct());
    },[fetchProduct])

    const {products,loading,error} =useSelector((state)=>state.product);

    if(loading){
        return <h1 style={{textAlign:"center"}}>Loading....</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }


    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                        <th>category</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p)=>{
                            return(
                                <tr>
                                    <td>{p.id}</td>
                                    <td>{p.title}</td>
                                    <td>{p.price}</td>
                                    <td>{p.description}</td>
                                    <td>{p.category}</td>
                                    <td><img src={p.image} alt="product image" style={{height:"100px",width:"100px"}}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductList
