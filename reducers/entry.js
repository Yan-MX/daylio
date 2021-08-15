//import { ErrorPayload } from "../../../common/payloads/ErrorActionPayload";
import { Action, handleActions } from "redux-actions";
import mockupData from "../screens/MockupData";
import { getCurrentMonth } from "../screens/reusable/reuseFunction";
import { monthNames, weekday } from "../screens/reusable/Constant";
// Initial state
const initialState = {
  data: mockupData,
  error: undefined,
  isAdding: false,
  month: getCurrentMonth,
};

// Actions
const ADD_ENTRY = "Entry/ADD";
const OPEN_OR_CLOSE = "Entry/OPEN_OR_CLOSE_AddEntry";
const NEXT_MONTH = "Entry/SHOW_NEXT_MONTH";
const LAST_MONTH = "Entry/SHOW_LAST_MONTH";
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
export function ShowNextMonth() {
  return {
    type: NEXT_MONTH,
  };
}
export function ShowLastMonth() {
  return {
    type: LAST_MONTH,
  };
}

// Reducer Definition
const EntryReducer = handleActions(
  {
    [ADD_ENTRY]: handleAdd,
    [OPEN_OR_CLOSE]: handleOpenOrClose,
    [NEXT_MONTH]: handleGetNextMonth,
    [LAST_MONTH]: handleGetLastMonth,
  },
  initialState
);

function handleAdd(state, action) {
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
function handleGetNextMonth(state, action) {
  let index = monthNames.indexOf(state.month);
  index >= 11 ? (index = 10) : "";
  return {
    ...state,
    month: monthNames[index + 1],
  };
}

function handleGetLastMonth(state, action) {
  let index = monthNames.indexOf(state.month);
  index <= 0 ? (index = 1) : "";
  return {
    ...state,
    month: monthNames[index - 1],
  };
}

export default EntryReducer;
