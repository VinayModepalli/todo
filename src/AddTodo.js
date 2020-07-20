import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        todo : ''
    }
    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            todo: ''
        })
    }
    render() {
        return (
            <div className="container">
                <form classname="row" onSubmit={this.handleSubmit}>
                    <div className="col-lg-5 col-md-10 mx-auto">
                        <div className="form-group">
                            <label htmlFor="">Enter the Todo</label>
                            <input className="form-control" type="text" onChange={this.handleChange}  value={this.state.todo}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
