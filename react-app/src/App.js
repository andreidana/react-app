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

  switchNameHandler = () => {
    this.state.persons[0].Name = "Andrei Dana";
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World, React app!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}><h1>My Hobbies: Reading</h1></Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;
