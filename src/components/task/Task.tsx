import React from 'react';
import styles from './Task.module.css'
import {Trash} from 'phosphor-react'

export const Task: React.FC = () => {
  return (
    <div className={styles.container}>
      <input type="checkbox"/>
      <p>Olá, essa é a mensagem de task nº 1.</p>
      <button>
        <Trash size={24}/>
      </button>

    </div>
  )
}
