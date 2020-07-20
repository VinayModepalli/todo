import React, { Component } from 'react';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    todos: [
      {id:1 , todo:'This is an example Todo'},
      {id:2 , todo:'Tap to delete'},
      {id:3 , todo:'Try adding your own Todos'},
    ]
  }
  deleteTodo = (id) => { 
    let todos = this.state.todos.filter( todo => {
      return todo.id !== id
    } )
    this.setState({
      todos
    });
    console.log(this.state.todos)
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render () {
    return (
      <div className="container App-header">
        <h1 className="text-center">Todo</h1>
        <div className="container">
          <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo} />
          <AddTodo addTodo = {this.addTodo} />
        </div>
      </div>
    )
  }
}

export default App;
