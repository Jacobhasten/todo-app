import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import avatar from "./avatar.jpg"
import Todo from "./Components/Todo"
import Sidebar from "./Components/Sidebar"

const todoList = [{
  id: 1,
  title: "Pay Electric Bill",
  category: "Finance",
  time: "Tue 7:30pm",
  description: "your description",
  completed: false
},
{
  id: 2,
  title: "Laundry",
  category: "Household",
  time: "Tue 8:00pm",
  description: "your description",
  completed: false
},
{
  id: 3,
  title: "Groceries",
  category: "Household",
  time: "Wed 2:00pm",
  description: "your description",
  completed: false
},
{
  id: 4,
  title: "Finish Work",
  category: "Work",
  time: "Fri 1:00pm",
  description: "your description",
  completed: false
}];

const user = {
  name: "Jacob Hasten",
  imgUrl: avatar
};

function App() {
  return (
    <div className="page-wrapper">
      <Sidebar user={user}/>
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
            {todoList.map((toDoObject, index) => (
              <Todo task={toDoObject} key={index}/>
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
}

export default App;
