import React from 'react'
import styles from './Footer.module.scss'

 function Footer() {
  return (
    <footer className={`${styles.footer} d-flex flex-row align-items-center justify-content-center `}>
 
      <p>Copyright 2023 zimagine prod</p>
    </footer>
  )
}
export default Footer;