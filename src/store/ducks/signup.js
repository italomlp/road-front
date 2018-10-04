export const Types = {
  SIGNUP_REQUEST: 'signup/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'signup/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'signup/SIGNUP_FAILURE',
};

const initialState = {
  loading: false,
  error: null,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case Types.SIGNUP_REQUEST:
      return { ...state, loading: true };
    case Types.SIGNUP_SUCCESS:
      return { loading: false, error: null };
    case Types.SIGNUP_FAILURE:
      return { loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  signupRequest: (fullName, cnhExpiration, birthDate, email, password) => ({
    type: Types.SIGNUP_REQUEST,
    payload: {
      fullName,
      cnhExpiration,
      birthDate,
      email,
      password,
    },
  }),
  signupSuccess: () => ({
    type: Types.SIGNUP_SUCCESS,
    payload: {},
  }),
  signupFailure: error => ({
    type: Types.SIGNUP_FAILURE,
    payload: { error },
  }),
};
