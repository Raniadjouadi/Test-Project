import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search.js';
import Header from './components/Header.js';
import { useState } from 'react';



const App = () => {
  const [word, setWord] = useState('');
  const handleSearchSubmit =(e) =>{
    e.preventDefault();
    console.log(word);
  }
  return (
    <div>
    <Header title="Images Gallery" />
    <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
