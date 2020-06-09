import React from 'react';
import shortid from "shortid";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import avatar from "./avatar.jpg"
import Todo from "./Components/Todo"
import Sidebar from "./Components/Sidebar"

const TODO_KEY = "myapp_todo"

class App extends React.Component {
  state = {
    todoList: [
      {
        id: shortid.generate(),
        title: "Pay Electric Bill",
        category: "Finance",
        time: "Tue 7:30pm",
        description: "your description",
        completed: false
      },
      {
        id: shortid.generate(),
        title: "Laundry",
        category: "Household",
        time: "Tue 8:00pm",
        description: "your description",
        completed: false
      },
      {
        id: shortid.generate(),
        title: "Groceries",
        category: "Household",
        time: "Wed 2:00pm",
        description: "your description",
        completed: false
      },
      {
        id: shortid.generate(),
        title: "Finish Work",
        category: "Work",
        time: "Fri 1:00pm",
        description: "your description",
        completed: false
      },
    ],
    newTask: "",
    user: 
      {
        name: "Jacob Hasten",
        imgUrl: avatar,
      },
  };
  handleInputChange = (event) => {
    this.setState({newTask: event.target.value})
  };
  handleAddNewTask = () => {
    let newTaskObj = {
      id: shortid.generate(),
      title: this.state.newTask,
      category: "Work",
      time: "Fri 1:00pm",
      description: "your description",
      completed: false
      
    }
    this.setState((state) => ({
      todoList: [...state.todoList, newTaskObj],
      newTask: ""
    
    }));
  };
  handleChangeTodo = (id) => {
    this.setState(state=>{
      const newList = state.todoList.map((item) =>{
        if (item.id === id) {
          return{...item, completed: item.completed? false : true}
        }
        else {
          return item
        }     
      });
      return {
       todoList: newList,
      }
    })
  };

  handleDeleteTodo = (id) => {
    this.setState(state=>{
      const newList = state.todoList.filter((item) =>{
       return item.id !== id
      });
      return {
       todoList: newList,
      }
    })
  };
  componentDidMount() {
    const todoString = localStorage.getItem(TODO_KEY) 

    if (todoString) {
      this.setState({todoList: JSON.parse(todoString)})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.state.todoList) {
    localStorage.setItem(TODO_KEY, JSON.stringify(this.state.todoList));
    }
  }



render() {
  return (
    <div className="page-wrapper">
      <Sidebar 
      user={this.state.user} 
      onInputChange={this.handleInputChange}
      onAddNewTask={this.handleAddNewTask} />
      <div className="body-wrapper">
        <div className="body__date-organizer">
          <div className="body__date-organizer-each">
            <div className="body__date-organizer__title-icon-wrapper">
              <h2 className="body__date-organizer-each-title">Today</h2>
              <FontAwesomeIcon icon={faChevronDown} className="categories-icon" />
            </div>
          </div>
          <div className="body__date-organizer-each">
            <div className="body__date-organizer__title-icon-wrapper">
              <h2 className="body__date-organizer-each-title">This Week</h2>
              <FontAwesomeIcon icon={faChevronUp} className="categories-icon" />
            </div>
            {this.state.todoList.map((toDoObject, index) => (
              <Todo task={toDoObject} 
              key={index}
              onChangeTodo={this.handleChangeTodo}
              onDeleteTodo={this.handleDeleteTodo} />
            ))}
          </div>

          <div className="body__date-organizer-each">
            <div className="body__date-organizer__title-icon-wrapper">
              <h2 className="body__date-organizer-each-title">This Month</h2>
              <FontAwesomeIcon icon={faChevronDown} className="categories-icon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
}

export default App;
