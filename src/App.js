import { Route, Routes } from 'react-router-dom'
import './App.css';
import MovieCard from './components/MovieCard.js'
import Header from './components/Header.js'
import Layout from './components/Layout.js'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<div className="movies"><MovieCard /> </div>} />

        {/* <Header />
        <div className="movies">  
          <MovieCard />
        </div> */}
      </Route>

    </Routes>
    
    </>
  );
}

export default App;
