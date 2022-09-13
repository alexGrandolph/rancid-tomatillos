import { Route, Routes } from 'react-router-dom'
import './App.css';
import MovieCard from './components/MovieCard.js'
import Header from './components/Header.js'

function App() {
  return (
    <>
    <Routes>
    
    <Header />
      <div className="movies">  
        <MovieCard />
      
      </div>
    </Routes>
    
    </>
  );
}

export default App;
