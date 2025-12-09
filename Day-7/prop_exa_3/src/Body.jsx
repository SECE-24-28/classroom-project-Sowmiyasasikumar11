import React from 'react'

export const Body = ({stuList,handleChange,handleDelete}) => {
  return (
    <div>
        <ul>
            {stuList.map((stu)=>
            <Student key={stu.id} stu={stu}
            handleChange={handleChange}
            handleDelete={handleDelete}
            />
            )}
        </ul>
    </div>
  )
}
