import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
 
import BookCards from './Components/FirebaseBooks'
// import SignUp from './Components/Form/signUp'


function App() {

  return (
    <>
   
  <BrowserRouter> 
  <div>
    <Navbar/>    
    <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/skills'} element={<Skills/>}/>
    <Route path={'/experience'} element={<Experience/>}/>
    <Route path={'/books'} element={<BookCards/>}/>
  </Routes>
  </div> 
    
     
  </BrowserRouter> 
       
    </>
  )
}

export default App
