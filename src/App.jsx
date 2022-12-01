// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Collections from './pages/Collections/Collections'
import CollectionDetail from './pages/CollectionDetail/CollectionDetail'

function App() {
  return (
    <>
      <NavBar className='navBar'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='collections' element={<Collections />} />
        <Route path='collections/:collectionDetail' element={<CollectionDetail />} />  
      </Routes>
    </>
  )
}

export default App;
