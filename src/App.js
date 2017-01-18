import React from 'react';
import TitleBar from './TitleBar';
import SearchBar from './SearchBar';
import ItemList from './ItemList';

class App extends React.Component {
  render() {
    return (
      <div>
        Welcome to App 
        <TitleBar />
        <SearchBar />
        <ItemList />
      </div>
    );
  }
}

export default App;
