import React from 'react'
import styles from './Paragraphe.module.scss'

 function Paragraphe({children,className=''}) {
  return (
    <div>
        <p className={styles.p}>{children}</p>
    </div>
  )
}
export default Paragraphe