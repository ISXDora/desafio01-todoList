import { ChangeEvent, useRef, useState } from 'react';
import styles from './Task.module.css'
import {Trash, Check} from 'phosphor-react'

type TaskProps = {
  id?: string;
  text: string;
  handleStatus: (status: boolean) => void;
}



export const Task = ({text,handleStatus}: TaskProps) => {
  const [isDone, setIsDone] = useState(false)

  const toggleChecked = (event : ChangeEvent<HTMLInputElement>) => {
    const {target} = event
    if (target.checked) {
      setIsDone(true)
      return true
    }else {
      setIsDone(false)
      return false
    }
  }


  // const handleDeleteTask = () =>{
  //   OnDeleteTask(text)
  // }
  if( isDone === true) {
   handleStatus(isDone)
  }

  return (
    <div className={styles.container}>
      <label >
      <input type="checkbox" onChange={toggleChecked}/>
      <span><Check size={12} weight="bold" /></span>
      </label>
      <p className={isDone ? styles.done : '' } >{text}</p>
      <button >
        <Trash size={16}/>
      </button>

    </div>
  )
}
