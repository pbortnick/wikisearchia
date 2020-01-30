import React, { useReducer } from 'react';

import searchContext from './index';
import reducer from './reducer';
import { SET_SEARCH_VALUE, RESET_PAGE } from './types';

const SearchState = (props) => {
  const initialState = {
    searchValue: '',
    history: [],
    searched: false,
    reset: false
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const sendSearch = (input) => {
    dispatch({
      type: SET_SEARCH_VALUE,
      payload: { 
        input: input,
        searched: true
      }
    });
  }

  const stopSearch = () => {
    dispatch({
      type: SET_SEARCH_VALUE,
      payload: { 
        input: '',
        searched: false
      }
    });
  }

  const resetPage = () => {
    dispatch({
      type: RESET_PAGE,
      payload: {}
    });
  }

  return  (
    <searchContext.Provider value={{ searchValue: state.searchValue, history: state.history, reset: state.reset, sendSearch, stopSearch, resetPage }}>
      {props.children}
    </searchContext.Provider>
  )
}

export default SearchState;