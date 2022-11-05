import { ChangeEvent, FormEvent, FormEventHandler, FormHTMLAttributes, InvalidEvent, useState } from "react";
import styles from "./NewTextTask.module.css"
import {PlusCircle}  from "phosphor-react";

interface NewTextTask {
  newText: string;
  handleNewText: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}


export const NewTextTask= ({newText, handleNewText, handleSubmit}: NewTextTask) => {

  const textEmpty = newText.length === 0 
 
  return (
    <form onSubmit={handleSubmit}>
    <div className={styles.container}>
      <input 
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewText}
        value={newText}       
        // onInput={removeMessageInvalidTask}
        // onInvalid={handleNewTextTaskInvalid}
        required
      />
      <button type="submit" disabled={textEmpty}>
        Criar<PlusCircle size={16} weight={"bold"} color="#F2F2F2" />
      </button>
    </div>
    </form>
  )
}