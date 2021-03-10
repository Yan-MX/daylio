//import { ErrorPayload } from "../../../common/payloads/ErrorActionPayload";
import { Action, handleActions } from "redux-actions";
import mockupData from "../screens/MockupData";

// Initial state
const initialState = {
  data: mockupData,
  error: undefined,
};

// Actions
const ADD_ENTRY = "Entry/ADD";

// Action creators

export function addEntry(data) {
  console.log("add entry called");
  return {
    type: ADD_ENTRY,
    payload: data,
  };
}

// Reducer Definition
const EntryReducer = handleActions(
  {
    [ADD_ENTRY]: handleAdd,
  },
  initialState
);

function handleAdd(state, action) {
  return {
    ...state,
    data: state.data.concat(action.payload),
  };
}

export default EntryReducer;
