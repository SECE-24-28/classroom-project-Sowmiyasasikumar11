import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     const[stuList,setstuList]=useState([
        {id:1,sname:"Sowmi",age:18,fee:true},
        {id:2,sname:"Visva",age:17,fee:false},
        {id:3,sname:"Kani",age:16,fee:false},
        {id:4,sname:"Roshan",age:15,fee:true}
     ])
     const handleDelete=(id)=>{
        const newList=stuList.filter((stu)=>stu.id!==id)
        setstuList(newList)
     }
      const handleChange=(id)=>{
        const newList=stuList.map((stu)=>(stu.id===id)?({...stu,fee:!stu.fee}):(stu))
        setstuList(newList)
      }
  return (
    <>
      
    </>
  )
}

export default App
