import React, { useCallback, useEffect, useMemo } from 'react';
import { stringify, v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, FormEventHandler, FormHTMLAttributes, useState } from "react";
import { NewTextTask } from "../newTextTasks/NewTextTask";
import { Task } from "../task/Task";
import { TasksEmpty } from "../tasksEmpty/TasksEmpty";
import { TasksManager } from "../TasksManager";

import styles from "./Tasks.module.css";

export interface TaskProps {
  id?: string;
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
      setTasks([...tasks, 
        {
          id: uuidv4(),
          text: newText,
          status: 'toDo'
        }
      ])
      setNewText('')

      console.log(tasks, 'tasks') 
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

  

  useEffect(() => {
    console.log(tasks, 'tasks')
  },[tasks])

  const handleDeleteTask = (id: string) => {
    const newT = tasks.filter(task => task.id !== id)
    setTasks(newT)
  }
  

  const createdCounterTask = tasks.length
  const completedCounterTask = tasks.filter(task => task.status === 'done').length
  // console.log(tasks, 'estado geral')
  return (
    <section className={styles.container}>
     <NewTextTask
        newText={newText}
        handleNewText={handleNewText}
        handleSubmit={handleSubmit}
     />
     <TasksManager 
      createdCounterTask={createdCounterTask}
      completedCounterTask={completedCounterTask}

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
