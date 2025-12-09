import React, {useContext} from 'react'
import DataContext from './DataContext.jsx'

const One = () =>
  {
       const {name}=useContext(DataContext);
  return (
     <div>
       <h1>Hai {name}</h1>
     </div>
  )
}

export default One