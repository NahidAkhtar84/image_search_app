import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';


function App() {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

  return (
    <div className="App">
      <Header title="Image Search"/>
      <Search word = {word} setWord={setWord} searchKey={handleSearchSubmit}/>
    </div>
  );
}

export default App;
