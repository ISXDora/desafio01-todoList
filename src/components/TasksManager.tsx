import styles from "./TasksManager.module.css";


export const TasksManager = ({createdCounterTask, completedCounterTask}) => {
  return (
    <div className={styles.header}>
    <div className={styles.containerTitle}>
      <strong>Tarefas criadas </strong>
      <span>{createdCounterTask}</span>
    </div>
    <div className={styles.containerTitle}>
      <strong className={styles.strongColorDone}>Concluídas</strong>
      <span>{completedCounterTask} de {createdCounterTask}</span>
    </div>
  </div>
  )
}