export const Types = {
  LIST_CAR_REQUEST: 'cars/LIST_CAR_REQUEST',
  LIST_CAR_SUCCESS: 'cars/LIST_CAR_SUCCESS',
  LIST_CAR_FAILURE: 'cars/LIST_CAR_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function cars(state = initialState, action) {
  switch (action.type) {
    case Types.LIST_CAR_REQUEST:
      return { ...state, loading: true };
    case Types.LIST_CAR_SUCCESS:
      return { data: action.payload.data, loading: false, error: null };
    case Types.LIST_CAR_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  listCarsRequest: () => ({
    type: Types.LIST_CAR_REQUEST,
    payload: {},
  }),
  listCarsSuccess: data => ({
    type: Types.LIST_CAR_SUCCESS,
    payload: {
      data,
    },
  }),
  listCarsFailure: error => ({
    type: Types.LIST_CAR_FAILURE,
    payload: { error },
  }),
};
