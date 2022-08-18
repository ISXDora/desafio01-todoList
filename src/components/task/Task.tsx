import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Task.module.css'
import {Trash, Check} from 'phosphor-react'

export const Task: React.FC = () => {
  const [isDone, setIsDone] = useState(false)


  const togglechecked = (event : ChangeEvent<HTMLInputElement>) => {
   const {target} = event
   if (target.checked) {
     setIsDone(true)
   }else {
    setIsDone(false)
   }
  }

  return (
    <div className={styles.container}>
      <label >

      <input type="checkbox" onChange={togglechecked}/>
      <span><Check size={12} weight="bold" /></span>
      </label>
      <p className={isDone ? styles.done : '' } >Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash size={16}/>
      </button>

    </div>
  )
}
