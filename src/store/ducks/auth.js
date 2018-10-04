export const Types = {
  LOGIN_REQUEST: 'login/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'login/LOGIN_FAILURE',
  LOGOUT_REQUEST: 'logout/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'logout/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'logout/LOGOUT_FAILURE',
};

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return { user: action.payload.user, loading: false, error: null };
    case Types.LOGIN_FAILURE:
      return { user: state.user, loading: false, error: action.payload.error };
    case Types.LOGOUT_REQUEST:
      return { ...state, loading: true };
    case Types.LOGOUT_SUCCESS:
      return { user: {}, loading: false, error: null };
    case Types.LOGOUT_FAILURE:
      return { user: state.user, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: {
      email,
      password,
    },
  }),
  loginSuccess: user => ({
    type: Types.LOGIN_SUCCESS,
    payload: { user },
  }),
  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error },
  }),
  logoutRequest: () => ({
    type: Types.LOGOUT_REQUEST,
    payload: {},
  }),
  logoutSuccess: () => ({
    type: Types.LOGOUT_SUCCESS,
    payload: {},
  }),
  logoutFailure: error => ({
    type: Types.LOGOUT_FAILURE,
    payload: { error },
  }),
};
