import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFolder, faFolderOpen, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import avatar from "./avatar.jpg"

function App() {
  return (
    <div className="page-wrapper">
      <div className="sidebar-wrapper">
        <div className="sidebar__profile">
          <img src={avatar} alt="avatar" className="sidebar__profile-avatar-img"></img>
          <h3 className="sidebar__profile-username">Jacob Hasten</h3>
        </div>
        <div className="sidebar__add-new-task">
          <a href="#0">Add New Task</a>
        </div>
        <div className="sidebar__categories__header">
          <div className="sidebar__categories__title-icon">
            <FontAwesomeIcon icon={faFolderOpen} className="categories-icon" />
            <h2>Categories</h2>
          </div>
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </div>
        <div className="sidebar__categories__folders">
          <div className="sidebar__categories__folders-each">
            <div className="sidebar__categories__title-icon">
              <FontAwesomeIcon icon={faFolder} className="categories-icon" />
              <h4 className="sidebar__categories__folders-each-title">Finance</h4>
            </div>
            <p className="sidebar__categories__folders-each-amount-tasks">5 tasks</p>
          </div>
          <div className="sidebar__categories__folders-each">
            <div className="sidebar__categories__title-icon">
              <FontAwesomeIcon icon={faFolder} className="categories-icon" />
              <h4 className="sidebar__categories__folders-each-title">Household</h4>
            </div>
            <p className="sidebar__categories__folders-each-amount-tasks">5 tasks</p>
          </div>
          <div className="sidebar__categories__folders-each">
            <div className="sidebar__categories__title-icon">
              <FontAwesomeIcon icon={faFolder} className="categories-icon" />
              <h4 className="sidebar__categories__folders-each-title">Work</h4>
            </div>
            <p className="sidebar__categories__folders-each-amount-tasks">5 tasks</p>
          </div>
          <div className="sidebar__categories__folders-each">
            <div className="sidebar__categories__title-icon">
              <FontAwesomeIcon icon={faFolder} className="categories-icon" />
              <h4 className="sidebar__categories__folders-each-title">Health</h4>
            </div>
            <p className="sidebar__categories__folders-each-amount-tasks">5 tasks</p>
          </div>
          <div className="sidebar__categories__folders-each">
            <div className="sidebar__categories__title-icon">
              <FontAwesomeIcon icon={faFolder} className="categories-icon" />
              <h4 className="sidebar__categories__folders-each-title">All Tasks</h4>
            </div>
            <p className="sidebar__categories__folders-each-amount-tasks">5 tasks</p>
          </div>
        </div>
      </div>
      <div className="body-wrapper">
        <div className="body__date-organizer">
          <div className="body__date-organizer-each">
            <h2 className="body__date-organizer-each-title">Today</h2>
            <input type="checkbox"></input>
          </div>
          <div className="body__date-organizer-each">

            <h2 className="body__date-organizer-each-title">This Week</h2>
            <input type="checkbox"></input>
            <div className="task-card-wrapper">
              <div className="task-card">
              <input className="task-card__checkbox" type="checkbox"></input>
              <h5 className="task-card__title"> Pay electric bill</h5>
              <p className="task-card__category">Finance</p>
              <p className="task-card__time"> Tue 7:30pm</p>
              <p className="task-card__description">Description: Lorem ipsum dolor sit amet, aeque fabellas euripidis nam ...</p>
              <FontAwesomeIcon icon={faPen} className="categories-icon task-card__edit" />
              <FontAwesomeIcon icon={faTrash} className="categories-icon task-card__delete" />
              </div>
            </div>
          </div>

          <div className="body__date-organizer-each">
            <h2 className="body__date-organizer-each-title">This Month</h2>
            <input type="checkbox"></input>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
