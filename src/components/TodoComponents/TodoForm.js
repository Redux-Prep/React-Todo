import React from 'react';

const TodoForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<input type='text' name='todo' value={props.todoText} onChange={props.handleChanges} />
			<button>Add</button>
		</form>
	);
};

export default TodoForm;
