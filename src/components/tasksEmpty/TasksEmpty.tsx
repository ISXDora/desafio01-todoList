import styles from "./TasksEmpty.module.css";

import EmptyPot from '../../assets/Clipboard.png'


export const TasksEmpty = () => {

  return (
   
      <div className={styles.tasksContainerEmpty}>
        <img className={styles.emptyPot}src={EmptyPot}/>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

  )
 }