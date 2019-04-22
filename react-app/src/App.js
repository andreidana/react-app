import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Andrei', age: 28},
      {id: 2, name: 'Test', age: 21},
      {id: 3, name: 'Altu', age: 17},
      {id: 4, name: 'Tot el', age: 89},
    ],
    showPersons: false,
    enteredText: '',
    characterCount: 0
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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }
 
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons.find(p => p.id === id) };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersons = (persons) => {
    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return (<Person
            click={() => this.deletePersonHandler(index)}
            changed={event => this.nameChangedHandler(event, person.id)}
            name={person.name}
            age={person.age}
            key={person.id}/>);
        })}
      </div>);
    }
    return persons;
  }

  setCharacters(event) {
    this.setState({
      enteredText: event.target.value,
      characterCount: event.target.value.length
    });
  }

  createCharComponents() {
    const characters = this.state.enteredText.map(char => char);

    return (<div>
      {
        characters.map((char, index) => {
          return (<CharComponent 
            click={() => this.deleteChar(index)}
            charValue={char}/>)
        })
      }
    </div>)
  }

  deleteChar(index) {
    const characters = this.state.enteredText.splice();
    characters.splice(index, 1);
    this.setState({enteredText: characters});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    let characters = null;

    persons = this.togglePersons(persons);
    characters = this.createCharComponents();

    return (
      <div className="app">
        <h1>Hello World, React app!</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'TO-DO')}>Switch Name</button>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        <br></br>
        {persons}
        <br></br>
        <input type="text" onChange={(event) => this.setCharacters(event)}/>
        <p>{this.state.characterCount}</p>
        <Validation textLength={this.state.characterCount}></Validation>
        {characters}
      </div>
    );
  }
}

export default App;
