const INITIAL_STATE = {
  error: null,
  loading: false,
  products: [],
  isOpenModel: false,
  modelMessage: '',
  snackbar: {
    varient: '',
    duration: 3000,
    message: '',
    open: false
  },
  formData: {
    isChanged: false,
    value: {}
  }
};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `GET_PRODUCT_SUCCESS`:
      return {
        ...state,
        products: action.data,
        error: null,
        loading: false
      }
    case `GET_PRODUCT_FAIL`:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case `EDIT_PRODUCT_SUCCESS`: {
      return {
        ...state,
        loader: false,
        snackbar: {
          varient: 'success',
          message: 'Succesfully edited the Product',
          open: true
        }
      }
    }
    case `EDIT_PRODUCT_FAIL`:
      return {
        ...state,
        loader: false,
        snackbar: {
          varient: 'error',
          message: action.error,
          open: true
        },
      }
    case `ADD_PRODUCT_SUCCESS`: {

      return {
        ...state,
        loader: false,
        snackbar: {
          varient: 'success',
          message: 'Succesfully added the Product',
          open: true
        },
        products: state.products.concat(action.data)
      }
    }
    case `ADD_PRODUCT_FAIL`:
      return {
        ...state,
        loader: false,
        snackbar: {
          varient: 'error',
          message: action.error,
          open: true
        },
      }
    case `DELETE_PRODUCT_SUCCESS`: { 
      return {
        ...state,
        loader: false,
        snackbar: {
          varient: 'success',
          message: 'Succesfully deleted the Product',
          open: true
        },
        //products: 
      }
    }
    case `DELETE_PRODUCT_FAIL`:
      return {
        ...state,
        loader: false,
        snackbar: {
          varient: 'error',
          message: action.error,
          open: true
        },
      }
    case 'OPEN_PRODUCT_MODEL':
      return {
        ...state,
        isOpenModel: true,
        modelMessage: action.payload.action,
        formData: {
          isChanged: false,
          value: (action.payload.index === -1 ? {} : state.products[action.payload.index])
        }
      }
    case 'EDIT_PRODUCT_MODEL':
      return {
        ...state,
        formData: {
          isChanged: true,
          value: {
            ...state.formData.value, [action.payload.name]: action.payload.value
          }
        }
      }

    case 'CLOSE_PRODUCT_MODEL': {
      return {
        ...state,
        isOpenModel: false,
        modelMessage: '',
        formData: {
          isChanged: false,
          value: {}
        }
      }
    }
    case 'CLOSE_SNACKBAR': {
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: false,
          duration: 3000,
          message: '',
        }
      }
    }
    default: return state;
  }
}

export default productsReducer;