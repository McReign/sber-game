import cn from 'classnames'
import styles from './Timer.module.scss'

function TimeItem(props) {
  const {children} = props

  return (
    <div className={styles.timeItem}>
      <svg className={styles.timeItemBackdrop} viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.434363" y="0.434363" width="39.1313" height="59.1313" rx="8.2529" fill="white" stroke="url(#paint0_linear_278_7467)" strokeWidth="0.868726"/>
        <defs>
          <linearGradient id="paint0_linear_278_7467" x1="0" y1="0" x2="37.9729" y2="61.2566" gradientUnits="userSpaceOnUse">
            <stop stopColor="#21A038"/>
            <stop offset="0.304051" stopColor="#FAED00"/>
            <stop offset="0.599304" stopColor="#00ADEE"/>
            <stop offset="1" stopColor="#0087CD"/>
          </linearGradient>
        </defs>
      </svg>
      <span className={styles.timeItemContent}>{children}</span>
    </div>
  )
}

export function Timer(props) {
  const {className, time} = props
  const seconds = `${Math.trunc(time / 1000)}`.padStart(2, '0')
  const milliseconds = `${Math.trunc(time % 1000 / 10)}`.padStart(2, '0')

  return (
    <div className={cn(styles.timer, className)}>
      <TimeItem>{seconds[0]}</TimeItem>
      <TimeItem>{seconds[1]}</TimeItem>
      <span className={styles.separator}>:</span>
      <TimeItem>{milliseconds[0]}</TimeItem>
      <TimeItem>{milliseconds[1]}</TimeItem>
    </div>
  )
}