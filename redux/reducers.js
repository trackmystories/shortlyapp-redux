import {combineReducers} from 'redux';

let dataState = {data: [], shortenedLink: {}};

const total_links = (state = dataState, action) => {
  switch (action.type) {
    case 'TOTAL_LINKS':
      return {...state, data: action.data};

    case 'ADD_LINK':
      return {...state, data: [...state.data, action.data]};

    case 'REMOVE_LINK':
      return {
        ...state,
        data: state.data.filter(
          item => item.short_link !== action.data.short_link,
        ),
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  total_links,
});

export default rootReducer;
