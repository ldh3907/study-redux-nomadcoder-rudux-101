import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../Store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      addToDo("내용 없음");
    } else {
      addToDo(text);
    }
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
