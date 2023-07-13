import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from './actions';
const items = createReducer([], { [actions.fetchContactsSuccess]: (_, action) => action.payload })

const isLoading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [actions.fetchContactsError]: (_, action) => action.payload,
  [actions.fetchContactsRequest]: () => null        ,
});
export default combineReducers({
    items,
    isLoading,
    error,
})