import React from 'react'
import Logo from '../../assets/images/logo.svg'
import styles from './Screen.module.scss'

export function Screen(props) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={Logo} alt="Logo" />
    </div>
  )
}
