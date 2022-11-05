import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent,useState } from "react";
import { NewTextTask } from "../newTextTasks/NewTextTask";
import { Task } from "../task/Task";
import { TasksEmpty } from "../tasksEmpty/TasksEmpty";
import { TasksManager } from "../taskCounter/TasksManager"

import styles from "./Tasks.module.css";

export interface TaskProps {
  id: string;
  text: string;
  status: 'toDo' | 'done';
}

interface Tasks {
  listTasks: TaskProps[];
}



export const Tasks = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newText, setNewText] = useState('')

  const handleNewText = (event: ChangeEvent<HTMLInputElement>) => {
      const {target} = event
      setNewText(target.value)
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setTasks(state => [...state, 
        {
          id: uuidv4(),
          text: newText,
          status: 'toDo'
        }
      ])
      setNewText('')
  }

  const handleStatusChange = (status: boolean, id : string) => {
   const newT = tasks.map(task => {
     if (task.id === id) {
      return {...task, status: status ? 'done' : 'toDo' as 'toDo' | 'done'}
     }
      return task
    })
    setTasks(newT)
  }

  const handleDeleteTask = (id: string) => {
    const deletedTask = tasks.filter(task => task.id !== id)
    setTasks(deletedTask)
  }
  
  const totalTaskCounter = tasks.length
  const completeTaskCounter = tasks.filter(task => task.status === 'done').length
  return (
    <section className={styles.container}>
     <NewTextTask
        newText={newText}
        handleNewText={handleNewText}
        handleSubmit={handleSubmit}
     />
     <TasksManager 
      totalTaskCounter={totalTaskCounter}
      completeTaskCounter={completeTaskCounter}

     />
      <div className={styles.tasksContainer}>
        <>
       {
        tasks.length !== 0 ? tasks.map(task => {
            return <Task
                      key={task.id}
                      text={task.text}
                      handleStatus={handleStatusChange}
                      status={task.status}
                      id={task.id}
                      onDeleteTask={handleDeleteTask}
                    />
          }) : < TasksEmpty />
        }
        </>
   
      </div>

    </section>
  )
}
