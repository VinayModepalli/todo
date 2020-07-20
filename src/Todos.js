import React, { Component } from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-10 mx-auto">
                {
                    todos.map( todo => (
                        <div className="container alert alert-primary text-center rounded-pill" onClick={() => {deleteTodo(todo.id)}} key={todo.id}>
                            <h4>{todo.todo}</h4>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    ) : (
        <div className="container alert alert-warning text-center col-lg-6 col-md-10 mx-auto rounded-pill"><h4>No Todos..</h4></div>
    )
        return (
            todoList
        )
}

export default Todos