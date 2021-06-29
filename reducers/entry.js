//import { ErrorPayload } from "../../../common/payloads/ErrorActionPayload";
import { Action, handleActions } from "redux-actions";
import mockupData from "../screens/MockupData";

// Initial state
const initialState = {
  data: mockupData,
  error: undefined,
  isAdding: false,
};

// Actions
const ADD_ENTRY = "Entry/ADD";
const OPEN_OR_CLOSE = "Entry/OPEN_OR_CLOSE_AddEntry";

// Action creators

export function addEntry(data) {
  return {
    type: ADD_ENTRY,
    payload: data,
  };
}

export function ShowOrHideOverlay() {
  return {
    type: OPEN_OR_CLOSE,
  };
}

// Reducer Definition
const EntryReducer = handleActions(
  {
    [ADD_ENTRY]: handleAdd,
    [OPEN_OR_CLOSE]: handleOpenOrClose,
  },
  initialState
);

function handleAdd(state, action) {
  // if ((action.payload.date = state.data.get(-1).date)) {
  //   console.log(action.payload.date);
  // }
  //   return {
  //     ...state,
  //     data: [
  //       ...state.data,
  //       state.data[-1].moodentries.concat(action.payload.moodentries[0]),
  //     ],
  //   };
  // } else {
  return {
    ...state,
    data: state.data.concat(action.payload),
  };
}

function handleOpenOrClose(state, action) {
  return {
    ...state,
    isAdding: !state.isAdding,
  };
}

export default EntryReducer;
