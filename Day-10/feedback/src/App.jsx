import { useEffect, useState , useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import api from './api/Post'
import Search from './Search'
import AddPost from './AddPost'
import {format} from 'date-fns'
import DataContext, { DataProvider } from './Context/DataContext'
import {Link,Route,Routes} from 'react-router-dom'
import EditPost from './EditPost'
function App() {
  
  return (
    <>
    <ol>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/newpost">Newpost</Link></li>
    </ol>
    <DataProvider>
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/newpost" element={<AddPost />} />
           <Route path="/editpost/:id" element={<EditPost />}  />
       </Routes>
    </DataProvider>
    </>
  )
}
export default App