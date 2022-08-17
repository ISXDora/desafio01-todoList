import React from 'react';
import styles from './Task.module.css'
import {Trash, Check} from 'phosphor-react'

export const Task: React.FC = () => {
  return (
    <div className={styles.container}>
      <label>

      <input type="checkbox"/>
      <span><Check size={12} weight="bold"/></span>
      </label>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash size={16}/>
      </button>

    </div>
  )
}
