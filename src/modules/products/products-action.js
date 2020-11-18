import axios from './../../utils/axios';


const getProductsSuccess = (data) =>{
    return {
       type: `GET_PRODUCT_SUCCESS`,
       data: data 
    }
 }

const getProductsFail = (error) =>{
    return {
       type: `GET_PRODUCT_FAIL`,
       error: error 
    }
 }

export const getProducts = (token) => {

    return dispatch => {

        axios.get('/api/product', { headers: { Authorization: token } })
            .then(response => {
                dispatch(getProductsSuccess(response.data.data))
            })
            .catch(err => {
                dispatch(getProductsFail(err))
            })
    }
}

const addProductSuccess = (data) =>{
    return {
       type: `ADD_PRODUCT_SUCCESS`,
       data: data 
    }
 }

const addProductFail = (error) =>{
    return {
       type: `ADD_PRODUCT_FAIL`,
       error: error 
    }
 }

export function addProduct(details,token) {
    return dispatch => {

        axios.post('/api/product', details, { headers: { Authorization: token } })
            .then(response => {
                dispatch(addProductSuccess(response.data.data))
            })
            .catch(err => {
                dispatch(addProductFail(err))
            })
    } 
}

const editProductSuccess = (data) =>{
    return {
       type: `EDIT_PRODUCT_SUCCESS`,
       data: data 
    }
 }

const editProductFail = (error) =>{
    return {
       type: `EDIT_PRODUCT_FAIL`,
       error: error 
    }
 }

export function editProduct(details,token,id) {
    return dispatch => {

        axios.put(`/api/product/${id}`, details, { headers: { Authorization: token } })
            .then(response => {
                dispatch(editProductSuccess(response.data.data))
            })
            .catch(err => {
                dispatch(editProductFail(err))
            })
    }
}

const deleteProductSuccess = (data) =>{
    return {
       type: `DELETE_PRODUCT_SUCCESS`,
       data: data 
    }
 }

const deleteProductFail = (error) =>{
    return {
       type: `DELETE_PRODUCT_FAIL`,
       error: error 
    }
 }

export function deleteProduct(token,id) {
    return dispatch => {

        axios.delete(`/api/product/${id}`, { headers: { Authorization: token } })
            .then(response => {
                dispatch(deleteProductSuccess(response.data.data))
            })
            .catch(err => {
                dispatch(deleteProductFail(err))
            })
    }
}

export function openProductModel(modelValue){
    return {
        type: 'OPEN_PRODUCT_MODEL',
        payload: modelValue
    }
}

export function editProductModel(details) {
    return {
      type: 'EDIT_PRODUCT_MODEL',
       payload: details
    }; 
}

export function closeProductModel(){
    return {
        type: 'CLOSE_PRODUCT_MODEL'
    }
}

export function closeSnackbar(){
    return {
        type: 'CLOSE_SNACKBAR'
    }
}