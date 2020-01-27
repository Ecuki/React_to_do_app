import React from "react";
import "./App.css";
import TaskList from "./TaskList.js";
import AddTask from "./AddTask.js";

class App extends React.Component {
  counter = 10;
  state = {
    tasks: [
      {
        id: 0,
        text: "Zostać królem",
        date: "2020-02-15",
        active: true,
        important: true,
        finishDate: null
      },
      {
        id: 2,
        text: "zasadzić drzewo",
        date: "2020-04-15",
        active: true,
        important: false,
        finishDate: null
      },
      {
        id: 3,
        text: "Zamieść ulicę",
        date: "2020-03-15",
        active: false,
        important: true,
        finishDate: null
      },
      {
        id: 4,
        text: "Albo zrobić obiad",
        date: "2020-02-15",
        active: true,
        important: true,
        finishDate: null
      },
      {
        id: 5,
        text: "Zasadzić dziecko",
        date: "2021-04-15",
        active: true,
        important: false,
        finishDate: null
      },
      {
        id: 6,
        text: "Spłodzić króla",
        date: "2020-03-15",
        active: false,
        important: true,
        finishDate: null
      },
      {
        id: 7,
        text: "Zrobić obiad",
        date: "2020-02-15",
        active: true,
        important: true,
        finishDate: null
      },
      {
        id: 8,
        text: "Kupić dom",
        date: "2021-04-15",
        active: true,
        important: false,
        finishDate: null
      },
      {
        id: 9,
        text: "Kupić samochód",
        date: "2020-03-15",
        active: false,
        important: true,
        finishDate: null
      }
    ]
  };
  changeTaskStatus = id => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };
  deleteTask = id => {
    //--------1----------------
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // console.log(`delete ${id}`);
    //---------2-------
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };
  addTask = (text, priority, date) => {
    if (text.length > 3) {
      const task = {
        id: this.counter,
        text,
        date,
        active: true,
        important: priority,
        finishDate: null
      };
      this.counter++;
      this.setState(pervState => ({
        tasks: [...pervState.tasks, task]
      }));
      console.log(task);
      return true;
    } else {
      alert("Zadanie jest zbyt krótkie");
    }
  };

  render() {
    return (
      <div className="App">
        <h1>TODO</h1>
        <AddTask add={this.addTask} />
        <hr />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
