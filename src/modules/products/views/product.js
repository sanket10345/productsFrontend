import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import SnackBar from '../../../shared/components/snack-bar' 
import { getProducts, openProductModel, closeProductModel, closeSnackbar, deleteProduct } from '../products-action';
import { ProductToolbar, ProductTable, ProductModel } from '../components'


export default function Product(){
    const dispatch = useDispatch();
    const productStore = useSelector(store => store.products)
    const authToken = useSelector(store => store.auth.token)
    
    const handleOpenModel = (modelAction) => {
      dispatch(openProductModel(modelAction));
    };
  
    const handleClose = () => {
      dispatch(closeProductModel());
    };
    
    const handleDelete = (id) =>{
       dispatch(deleteProduct(authToken, id))
    }
    const handleCloseSnackbar = () => {
      dispatch(closeSnackbar())
    }
    useEffect(() => {
        dispatch(getProducts(authToken))      
    },[]);
    return (
        <div>
        <SnackBar open={productStore.snackbar.open} onClose={handleCloseSnackbar} message={productStore.snackbar.message} varient={productStore.snackbar.varient} duration={productStore.snackbar.duration} />  
        <ProductToolbar handleOpenModel={handleOpenModel}/>
        <ProductTable handleDelete={handleDelete} handleOpenModel={handleOpenModel}/>
      <ProductModel  isOpenModel={productStore.isOpenModel} handleCloseModel={handleClose} />
        </div>
    )
}
 