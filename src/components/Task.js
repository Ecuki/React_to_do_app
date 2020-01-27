import React from "react";

const Task = props => {
  const { text, date, id, active, important, finishDate } = props.task;
  const importantStyle = {
    color: "green"
  };
  const buttonDone = (
    <button className="buttonDone" onClick={() => props.change(id)}>
      Zrobione
    </button>
  );
  const buttonDelete = (
    <button className="buttonDelete" onClick={() => props.delete(id)}>
      X
    </button>
  );
  if (active) {
    return (
      <div className="task">
        <p>
          <strong style={important ? importantStyle : null}> {text}</strong> -
          do <span>{date}</span>
          {buttonDone}
          {buttonDelete}
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div className="task">
        <p>
          <strong> {text}</strong>
          <span>
            <em>{` zrobić do ${date}`}</em>
          </span>
          <br />
          <em>Potwierdzenie wykonania </em>
          <span>{finish}</span> {buttonDelete}
        </p>
      </div>
    );
  }
};

export default Task;
