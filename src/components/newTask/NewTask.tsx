import React from "react";
import styles from "./NewTask.module.css";
import {PlusCircle}  from "phosphor-react";

export const NewTaks: React.FC = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Adicione uma nova tarefa"></input>
      <button>
        Criar<PlusCircle size={16} weight={"bold"} color="#F2F2F2"/>
      </button>
    </div>
  )
}