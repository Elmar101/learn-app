import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home-page/HomePage'
import RQSuperheroesPage from './pages/rq-superheroes-page/RQSuperheroesPage'
import SuperHeroesPage from './pages/superheroes-page/SuperHeroesPage'


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          
          <Route path='/' element={<HomePage />} />

          <Route path='/super-heroes' element={ <SuperHeroesPage />} />
           
          <Route path='/rq-super-heroes' element={<RQSuperheroesPage />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
