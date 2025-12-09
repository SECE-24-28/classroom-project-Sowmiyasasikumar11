import {createContent, useState} from 'react'   
const DataContext = createContent();
  export const DataProvider = ({children}) =>
  {
    const [name,setName]=useState("Prem");
    const [count,setCount]=useState(100);
    const demo=()=>
    {
        return "India"
    }
  return (
    <DataContext.Provider value={{name,setName,count,setCount,demo}}>
        {children}
    </DataContext.Provider>
  );
};

export default DataContext;