import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons'



function Sidebar(props) {
  // const handleInputChange = () => props.onInputChange()
return(<div className="sidebar-wrapper">
        <div className="sidebar__profile">
          <img src={props.user.imgUrl} alt="avatar" className="sidebar__profile-avatar-img"></img>
          <h3 className="sidebar__profile-username">{props.user.name}</h3>
        </div>
        <div className="sidebar__add-new-task">
          <button>Add New Task</button>
          <div className="sidebar__add-new-task__form">
          <input type="text" value={props.newTask} onChange={props.onInputChange}></input>
          <FontAwesomeIcon icon={faPlus} className="categories-icon" onClick={props.onAddNewTask}/>
          </div>
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
            <p className="sidebar__categories__folders-each-amount-tasks">6 tasks</p>
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
      </div>)
}
export default Sidebar;