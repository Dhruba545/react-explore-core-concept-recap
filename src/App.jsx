import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'

function App() {

  return (
    <>
      
      <h3>React Core Concepts</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>load</li>
      </ol>
      <hr/>
      <Posts></Posts>
    </>
  )
}

export default App
