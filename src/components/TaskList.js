import React from "react";
import Task from "./Task.js";
const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }
  // done.sort((a, b) => b.finishDate - a.finishDate);
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const tasks = tasks =>
    tasks.map(task => (
      <Task
        key={task.id}
        task={task}
        delete={props.delete}
        change={props.change}
      />
    ));

  return (
    <>
      <div className="active">
        <h2>
          Zadania do zrobienia <em>({active.length})</em>
        </h2>
        {active.length !== 0 ? (
          tasks(active)
        ) : (
          <p>Brak zadań do wykonania. Masz wolne!</p>
        )}
      </div>
      <div className="done">
        <h3>
          Zadania zrobione <em>({done.length})</em>
        </h3>
        {done.length > 5 && (
          <p>Wyświetlonych jest jedynie 5 ostatnio wykonanych zadań</p>
        )}
        {done.length !== 0 ? (
          tasks(done.slice(0, 5))
        ) : (
          <p>Brak wykonany zadań. Zabieraj się do roboty!</p>
        )}
      </div>
    </>
  );
};

export default TaskList;
