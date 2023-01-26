import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component'; 
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value,setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() => {
/*     fetch('https://jsonplaceholder.typicode.com/users')
      .then(respone => respone.json())
      .then((users) => setMonsters(users)
    ); */

    const fetchUsers = async () => {
      const user = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(user);
    }

    fetchUsers();
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    console.log('render');

    setFilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => 
  {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  
  return (
    
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters...'></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
    
    )
  }
  
export default App;


//class version
/* class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respone => respone.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
          }
        )
    );
  }

  onSearchChange = (event) => 
    {
      const searchField = event.target.value.toLowerCase();
      this.setState(() => {
        return { searchField };
      })
    }

  render(){

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
 
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

      return (
        <div className="App">
          <h1 className='app-title'>Monsters Rolodex</h1>
          <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters...'></SearchBox>
          <CardList monsters={filteredMonsters}></CardList>

        </div>
      );
  }
} */

