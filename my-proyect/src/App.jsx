import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import HeaderComponent from './components/HeaderComponent'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/header' element={<HeaderComponent/>}/>
    </Routes>
  )
}

export default App
