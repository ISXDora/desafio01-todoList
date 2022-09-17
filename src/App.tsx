
import { useState } from 'react'
import  './App.css'
import { Header } from './components/header/Header'
import { Tasks } from './components/tasks/Tasks'
import { TasksEmpty } from './components/tasksEmpty/TasksEmpty'

const tasks = [

]


function App() {

    return (
    <div className='containerApp'>
        <Header />
        <Tasks />
    </div>
 

  
)

}

export default App
