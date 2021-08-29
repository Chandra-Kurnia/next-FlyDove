const initialState = {
  profile: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
