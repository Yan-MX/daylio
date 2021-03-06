import { createStore, combineReducers } from "redux";
import EntryReducer from "./reducers/entry";

const rootReducer = combineReducers({
  entry: EntryReducer,
});

const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
