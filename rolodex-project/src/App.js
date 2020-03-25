import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state={
     monsters: [],
     searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  //arrow function makes it easier to write class components and their methods
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  
  render(){

    //use the search function to filter out the monsters names that don't match the field
    //Do this by destructuring and create a new array using .filter
      const { monsters, searchField }= this.state;
      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

      return (
        <div className="App">
          <SearchBox
            placeholder='search monsters' 
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters}/>
        </div>
      );
  }
}

export default App;
