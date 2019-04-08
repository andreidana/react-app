import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Andrei', age: 28},
      {name: 'Test', age: 21},
      {name: 'Altu', age: 17},
      {name: 'Tot el', age: 89},
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 31},
        {name: 'Larisa', age: 29},
        {name: 'Cristina', age: 1},
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 31},
        {name: 'Larisa', age: 29},
        {name: 'Cristina', age: 1},
      ]
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World, React app!</h1>
        <button onClick={this.switchNameHandler.bind(this, 'TO-DO')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'WIP')}><h1>My Hobbies: Reading</h1></Person>
      </div>
    );
  }
}

export default App;
