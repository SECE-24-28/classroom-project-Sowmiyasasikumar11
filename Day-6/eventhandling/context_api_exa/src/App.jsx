import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import One from './One.jsx'
import Two from './Two.jsx'
import { DataProvider } from './DataContext.jsx'

function App() {
  return (
    <>
      <DataProvider>
        <One />
        <Two />
      </DataProvider>
    </>
  )
}

export default App
