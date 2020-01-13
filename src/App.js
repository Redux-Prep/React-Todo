import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
	{
		task      : 'Find the White Box',
		id        : 1,
		completed : false,
	},
	{
		task      : 'Join Abyss',
		id        : 2,
		completed : false,
	},
	{
		task      : 'Open the Dark Pyramid',
		id        : 3,
		completed : false,
	},
];

class App extends Component {
	// you will need a place to store your state in this component.
	constructor () {
		super();
		this.state = {
			todoList : todos,
		};
  }
  
  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed : !todo.completed,
        }
      } 
      else {
        return todo
      }
    })
    this.setState({
      todoList: newTodoList,
    })
  }

  addTodo = todoTask => {
    const newTodo = {
      task: todoTask, 
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }

	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render () {
    const sortedList = this.state.todoList.sort((a,b) => a.completed - b.completed)
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
				<TodoList todos={sortedList} toggleTodo={this.toggleTodo}/>
			</div>
		);
	}
}

export default App;
