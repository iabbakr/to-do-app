import React from 'react'
import './App.css'
import Todo from './components/Todo.jsx'

function App() {
  

  return (
    <main className="app">
      <h1 className="app-title">ToDo App</h1>
      <p className="app-description">Manage your tasks efficiently</p>
      <p className="app-note">Note: This is a simple ToDo app built with React.</p>
      <p className="app-note">You can add, delete, and clear tasks.</p>
      <p className="app-note">Tasks are stored in memory and will not persist on page reload.</p>
      <p className="app-note">Enjoy</p>   
     <Todo />
    </main>
  )
}

export default App
