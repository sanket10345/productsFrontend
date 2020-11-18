import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Dialog, DialogTitle, DialogActions, DialogContent, Grid, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { ProductSchema } from '../../../utils/validate'
import { addProduct, editProduct, editProductModel } from '../products-action'
const useStyles = makeStyles({

});

function ProductModel(props) {
    const dispatch = useDispatch();
    const [formErrors, setFormErrors] = useState({});
    const authToken = useSelector(store => store.auth.token)
    const productStore = useSelector(store => store.products)
    const classes = useStyles();
    const { handleCloseModel, isOpenModel } = props;

    const handleClose = () => {
        handleCloseModel();
    };

    const handleSave = ()=>{
         if(productStore.modelMessage === 'Add Product'){
            dispatch(addProduct(productStore.formData.value, authToken))
        }    
        else{    
            dispatch(editProduct(productStore.formData.value, authToken, productStore.formData.value.id))
          }
      }

    const handleChange = (event) => {
        dispatch(editProductModel({ name: [event.target.name], value: event.target.value }))
    }

    const hasFormError = (field) =>
        formErrors[field] ? true : false;

    useEffect(() => {
        const formErrors = validate(productStore.formData.value, ProductSchema);
        setFormErrors(formErrors || {})
    }, [productStore.formData.value]);

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={isOpenModel}>
            <DialogTitle id="simple-dialog-title">{productStore.modelMessage}</DialogTitle>
            <DialogContent>
            </DialogContent>
            <Grid container spacing={7}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        className={classes.textField}
                        error={hasFormError('name')}
                        fullWidth
                        helperText={
                            hasFormError('name') ? formErrors["name"][0] :
                                null
                        }
                        label="Product Name"
                        name="name"
                        onChange={handleChange}
                        type="text"
                        value={productStore.formData.value.name || ''}
                        variant="outlined"
                        required
                        disabled={ productStore.modelMessage === 'Add Product' ? false: true }
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        className={classes.textField}
                        error={hasFormError('brand')}
                        fullWidth
                        helperText={
                            hasFormError('brand') ? formErrors["brand"][0] :
                                null
                        }
                        label="Brand"
                        name="brand"
                        onChange={handleChange}
                        type="text"
                        value={productStore.formData.value.brand || ''}
                        variant="outlined"
                        required
                        disabled={ productStore.modelMessage === 'Add Product' ? false: true }
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        className={classes.textField}
                        fullWidth
                        label="Count"
                        name="count"
                        onChange={handleChange}
                        type="NUMBER"
                        value={productStore.formData.value.count || 1}
                        variant="outlined"
                        InputProps={{ inputProps: { min: 1, max: 99 } }}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        className={classes.textField}
                        error={hasFormError('desc')}
                        fullWidth
                        helperText={
                            hasFormError('desc') ? formErrors["desc"][0] :
                                null
                        }
                        label="Description"
                        name="desc"
                        onChange={handleChange}
                        type="text"
                        value={productStore.formData.value.desc || ''}
                        variant="outlined"
                        required
                        disabled={false}
                    />
                </Grid>
            </Grid>
            <DialogActions>
                <Button autoFocus
                    onClick={handleSave}
                    color="primary"
                    className={classes.SaveButton}
                    disabled={productStore.formData.isChanged ? false : true}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ProductModel;