import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from './pages/LandingPage.tsx';
import UsersPage from './pages/UsersPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Link to={'/'}>Home</Link>
      <Link to={'/users'}>Users</Link>
      <Routes>
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/users' element = {<UsersPage/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
