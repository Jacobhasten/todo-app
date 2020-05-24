import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo(props) {
    return (
        <div className="task-card-wrapper">
            <div className="task-card">
                <input className="task-card__checkbox" type="checkbox"></input>
                <h5 className="task-card__title"> {props.task.title}</h5>
                <p className="task-card__category">{props.task.category}</p>
                <p className="task-card__time"> {props.task.time}</p>
                <p className="task-card__description">{props.task.description}</p>
                <FontAwesomeIcon icon={faPen} className="categories-icon task-card__edit" />
                <FontAwesomeIcon icon={faTrash} className="categories-icon task-card__delete" />
            </div>
        </div>
    )
}

export default Todo;