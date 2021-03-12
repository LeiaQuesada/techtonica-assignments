import React, { Component } from 'react';
import './App.css';
import Child from './components/parentToChild/child';

class App extends Component {
    state = {
        title: 'placeholder title'
    }
    render() {
        return (
            <div className="App">
                <Child title={this.state.title}/>
            </div>
        );
    }
}

export default App;