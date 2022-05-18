import { useState } from 'react'
import './App.css'
import ResturantDetails from './components/ResturantDetails'
import ResturantForm from './components/ResturantForm'

function App() {

  return (
    <div className="App">
      <ResturantDetails/>
      <ResturantForm/>
    </div>
  )
}

export default App
