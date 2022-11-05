import styles from './Header.module.css'
import Logo from '../../assets/Logo.svg'

export const Header =  () => {
  return (
    
     <header className={styles.container}>
      <img src={Logo}/>
    </header>
   
  )
};
