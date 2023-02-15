import React from 'react'
import styles from './Header.module.scss'
import banniere2 from '../assets/images/bannier-facebook2.png'




 function Header() {
  return (
    <header className={styles.header}>
    

      <div className='img'>
      
       <img src={banniere2} alt='banniere'/>
      </div>
      <h1>Zimagine Prod </h1>
      <h2>Web disigner</h2>
      <h3 >Donnons ensemble vie à vos projets!!! </h3>
    </header>
  )
}
export default Header;