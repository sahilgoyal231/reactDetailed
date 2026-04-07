import React from 'react';
import Card from '../components/Card';
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-2xl bg-teal-600 m-3 pd-6'>Tailwind implementation</h1>
      <Card username= "jane" />
      <Card />
      <Card />
    </>
  )
}

export default App
