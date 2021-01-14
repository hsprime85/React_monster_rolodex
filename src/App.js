import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'
import './App.css';

class App extends Component  {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

 render(){
  const { monsters, searchField } = this.state;
  const filteredMondsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
    <h1> Monster Rolodex</h1>
      <SearchBox 
        placeholder='Search Monsters' 
        handleChange={ this.handleChange }
        />
      <CardList monsters={filteredMondsters}/>
    </div>
  );
  }
}


export default App;
