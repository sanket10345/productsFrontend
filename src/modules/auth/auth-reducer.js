const INITIAL_STATE = {
  token: null,
  error: null,
  loading: false,
};

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `AUTH_SUCCESS`:
      return {
        ...state,
        token: action.token,
        error: null,
        loading: false
      }
    case `AUTH_FAIL`:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default: return state;
  }
}

export default authReducer;