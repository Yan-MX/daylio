import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { State } from "../../reducers/reducer";
import EntryPage from "../screens/entryScreen/EntryPage";
import { addEntry } from "../reducers/entry";

// export default compose(
//   connect(
//     (state) => ({
//       data: state.entry.data,
//     }),
//     (dispatch) => ({
//       dispatch,
//       addEntry: (data) => dispatch(addEntry(data)),
//     })
//   )
// )(EntryPage);
const mapStateToProps = function (state) {
  return {
    data: state.entry.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: bindActionCreators(addEntry, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryPage);
