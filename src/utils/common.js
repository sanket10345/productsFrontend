import { authSuccess } from '../modules/auth/auth-action';

export const authCheckState = () =>{
    return dispatch=>{
        const token =localStorage.getItem('token');
        if(! token) {
            //dispatch(logout());
        }
        else{
               dispatch(authSuccess(token));
        }
    }
}