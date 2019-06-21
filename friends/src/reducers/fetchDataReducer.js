import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_FRIEND
} from "../actions";

const initialState = {
  friends: [],
  deletingFriend: false,
  fetchingFriends: false,
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: null,
        fetchingFriends: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: action.payload,
        error: null
      };
    default:
      return state;
  }
};

export default fetchDataReducer;
