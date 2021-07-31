import { compose } from "recompose";
import { connect } from "react-redux";
import StatsCards from "../screens/statisticsScreen/StatsCards";
import { ShowNextMonth, ShowLastMonth } from "../reducers/entry";

export default compose(
  connect(
    (state) => ({
      data: state.entry.data,
      month: state.entry.month,
    }),
    (dispatch) => ({
      dispatch,
      ShowNextMonth: () => dispatch(ShowNextMonth()),
      ShowLastMonth: () => dispatch(ShowLastMonth()),
    })
  )
)(StatsCards);
