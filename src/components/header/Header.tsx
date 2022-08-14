import React from "react";
import styles from './Header.module.css'
import Logo from '../../assets/Logo.svg'

export const Header: React.FC = () => {
  return (
    
     <header className={styles.container}>
      <img src={Logo}/>
    </header>
   
  )
};
