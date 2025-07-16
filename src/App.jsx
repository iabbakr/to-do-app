import React from 'react'
import './App.css'
import Todo from './components/Todo.jsx'

function App() {
  

  return (
    <main className="app">
      <h1 className="app-title">ToDo App</h1>
      <p className="app-description">Manage your tasks efficiently</p>
      <p className="app-note">Note: This is a simple ToDo app built with React. You can add, delete, and clear tasks. Tasks are stored in memory and will not persist on page reload. Enjoy</p>   
     <Todo />
    </main>
  )
}

export default App
