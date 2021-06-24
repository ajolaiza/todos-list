import React from 'react'


export const Todoitem = ({todo,onDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-small btn-danger" onClick={onDelete}>Delete</button>
        </div>
    )
}
