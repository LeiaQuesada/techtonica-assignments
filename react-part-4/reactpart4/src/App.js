import React from 'react';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: 'Walk dog' }, { text: 'Feed cat' }]
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>Todos</h1>
        <div>
          {todos.length &&
            todos.map((todo, idx) => <Todo key={idx} todo={todo} />)}
        </div>
      </div>
    );
  }
}

export default App;