import React from "react";
import styles from "./TasksManager.module.css";

interface TasksManagerProps {
  totalTaskCounter: number;
  completeTaskCounter: number;
}

export const TasksManager: React.FC<TasksManagerProps> = ({totalTaskCounter, completeTaskCounter}) => {
  return (
    <div className={styles.header}>
    <div className={styles.containerTitle}>
      <strong>Tarefas criadas </strong>
      <span>{totalTaskCounter}</span>
    </div>
    <div className={styles.containerTitle}>
      <strong className={styles.strongColorDone}>Concluídas</strong>
      <span>{completeTaskCounter} de {totalTaskCounter}</span>
    </div>
  </div>
  )
}