import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content from './Content'
function App() {
  let frnds=["Smith","Victor","Nelson","Rohit"]
  return(
    <>
    <Header title={"Friends List"}
            city={"Chennai"}
    />
    {
      (frnds.length)?
      <Content frnds={frnds}/>
      :
      (  <p>List is Empty</p>

      )
    }
    </>
  )
}
export default App
