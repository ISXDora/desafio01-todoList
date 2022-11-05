import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './Task.module.css'
import {Trash, Check} from 'phosphor-react'

type TaskProps = {
  id: string;
  text: string;
  status: 'toDo' | 'done';
  handleStatus: (status: boolean, id: string) => void;
  onDeleteTask: (id: string) => void;
}



export const Task = ({text,handleStatus,onDeleteTask, id}: TaskProps) => {
  const [isDone, setIsDone] = useState(false)

  const toggleChecked = (event : ChangeEvent<HTMLInputElement>) => {
    const {target} = event
    if (target.checked) {
      setIsDone(true)
    } else {
      setIsDone(false)
    }
  }


  const handleDeleteTask = () =>{
    onDeleteTask(id)
  }


  useEffect(()=> {

      handleStatus(isDone, id)

  }, [isDone])

 
  return (
    <div className={styles.container}>
      <label >
      <input type="checkbox" onChange={toggleChecked} />
      <span><Check size={12} weight="bold" /></span>
      </label>
      <p className={isDone ? styles.done : '' } >{text}</p>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={16}/>
      </button>

    </div>
  )
}
