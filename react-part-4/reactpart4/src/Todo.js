import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    return <div>{todo.text}</div>;
  }
}


export default Todo;