import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import EntryPage from "../screens/entryScreen/EntryPage";
import { addEntry, ShowOrHideOverlay } from "../reducers/entry";

export default compose(
  connect(
    (state) => ({
      data: state.entry.data,
      isAdding: state.entry.isAdding,
    }),
    (dispatch) => ({
      dispatch,
      addEntry: (data) => dispatch(addEntry(data)),
      ShowOrHideOverlay: () => dispatch(ShowOrHideOverlay()),
    })
  )
)(EntryPage);
