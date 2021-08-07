import { connect } from "react-redux";
import { actionCreators } from "../routes/Store";

const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text} <button onClick={onBtnClick}>삭제</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
