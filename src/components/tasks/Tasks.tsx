import React from "react";
import { NewTaks } from "../newTask/NewTask";
import { Task } from "../task/Task";
import { TasksEmpty } from "../tasksEmpty/TasksEmpty";
import styles from "./Tasks.module.css";


export const Tasks: React.FC = () => {
  return (
    <section className={styles.container}>
      <NewTaks />
      <div className={styles.header}>
        <div className={styles.containerTitle}>
          <strong>Tarefas criadas </strong>
          <span>0</span>
        </div>
        <div className={styles.containerTitle}>
          <strong className={styles.strongColorDone}>Concluídas</strong>
          <span>0</span>
        </div>
      </div>
      <div className={styles.tasksContainer}>
        <Task />
        <Task />
      </div>

    </section>
  )
}