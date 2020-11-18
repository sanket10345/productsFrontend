import React from 'react'
import { useSelector } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Icon from '@material-ui/core/Icon';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import { tableStyle } from './'

export default function ProductTable(props){
    const classes = tableStyle();
    
    const store=useSelector(state=>state.products);
    
    const handleEdit = (index) => {
        props.handleOpenModel({"action":"Edit Product","index":index});
    };

    const handleDeleteClick = (id) =>{ 
        console.log("11111111111111111111111111111")  
        props.handleDelete(id);
    }

      return (
         
        <div className={classes.root}>
        {
            store.products.map((product,index) =>{
                
                return (
                  <Paper className={classes.paper}>
                  <Grid container justify="space-between" spacing={0}>
                      <Grid item xs={12} sm={3}>
                          ID: {product.id}
                      </Grid>
                      <Grid item xs={12} sm={3}>
                          Name:{product.name}<br />
                          Brand:{product.brand}
                      </Grid>
                      <Grid item xs={12} sm={3}>
                          Count: {product.count}<br />
                          Desc: {product.desc}
                      </Grid>
                      <Grid item xs={12} sm={3}>
                      <div className={classes.IconContainer} st>
                      <Icon className={classes.IconClassName} title="Edit" onClick={() => handleEdit(index)}><Edit fontSize="small" /></Icon><br />
                      <Icon className={classes.IconClassName} title="Delete" onClick={() => handleDeleteClick(product.id)} ><Delete fontSize="small" /></Icon><br />
                    </div>
                      </Grid>
                  </Grid> 
                  </Paper>   
                )  
            })  
        }  
        </div>
      );
}