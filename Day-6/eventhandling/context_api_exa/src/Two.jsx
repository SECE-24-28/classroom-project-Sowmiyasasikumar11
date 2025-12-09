import React, {useContext} from 'react'
import DataContext from './DataContext.jsx'

const Two = () =>
  {
      const{name,count}=useContext(DataContext);
  return (
    <div>
        <h1>Employee Name : {name}</h1>
        <p>Age : {count}</p>
    </div>
  )
}

export default Two