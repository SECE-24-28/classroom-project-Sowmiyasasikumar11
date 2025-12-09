import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [stuList,setstuList] =useState([
        {id:1,sname:"Jack",fee:true},
        {id:2,sname:"Smith",fee:false},
        {id:3,sname:"Victor",fee:true}
      ]);
      const handleDelete=(id)=>
      {
        const newList=stuList.filter((stu)=>stu.id!==id);
        setstuList(newList);
      }
      const handleChange=(id)=>
      {
        const newList=stuList.map((stu)=(stu.id===id?{...stu,fee:!stu.fee}:stu));
        setstuList(newList);
      }
      const addItem=(item)=>
      {
        const nid=(stuList.length)?(stuList[sz].id+1):(1)
        const newObj={id:nid,sname:item,fee:false}
        const newList=[...stuList,newObj]
        setstuList(newList)
      }
      const handleSubmit=(e)=>
      {
        e.preventDefault()
        addItem(newstu)
        setnewstu('')
      }
      const [newstu,setnewstu]=useState('');
  return (
    <>
      <h1>Student List</h1>
      <AddStudent newstu={newstu}
                  setNewStu={setnewstu} 
                  handleSubmit={handleSubmit}
                    />
      <ul>
        {
          stuList.map((stu)=>
            <li key={stu.id}>
              <input type="checkbox" checked={stu.fee} onChange={()=>handleChange(stu.id)}/>
              <label>{stu.sname}</label>
              <button onClick={()=>handleDelete(stu.id)}>Delete</button>
            </li>
          )
        }
      </ul>
    </>
  )
}

export default App
