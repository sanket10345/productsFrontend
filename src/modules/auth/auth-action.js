import axios from './../../utils/axios';

export const authSuccess = (token) => {
    return {
        type: `AUTH_SUCCESS`,
        token: token,
    }
}

export const authFail = (error) => {
    return {
        type: `AUTH_FAIL`,
        error: error
    }
}

export const logout = () =>{
    localStorage.removeItem('token')
    return {
        type: `AUTH_LOGOUT`
    }
}

export const auth = (email, password) => {
    return dispatch => {
        const authData = {
            name: email,
            password: password
        };

        axios.post('/api/user/login', authData)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.token);
                dispatch(authSuccess(response.data.token))
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error))
            })
    }
}

