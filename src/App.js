// import { Route, Routes } from 'react-router-dom'
import './App.css';
import MovieCard from './components/MovieCard.js'
import Header from './components/Header.js'

function App() {
  
  return (
    <>
    <Header />
      <div className="movies">  
        <MovieCard />
      </div>
    </>
  );
}

export default App;
