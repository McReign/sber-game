import {useCallback, useEffect, useState} from "react";
import styles from './Ripples.module.scss'

export function Ripples(props) {
  const {children, containerRef, enabled} = props
  const [items, setItems] = useState([])

  const handleClick = useCallback((e) => {
    const size = Math.max(containerRef?.current?.clientWidth, containerRef?.current?.clientHeight)
    const rect = containerRef?.current?.getBoundingClientRect()

    const item = {
      key: e.timeStamp,
      width: size,
      height: size,
      left: e.clientX - rect?.left - size / 2,
      top: e.clientY - rect?.top - size / 2,
    }

    setItems(prev => [...prev, item])

    setTimeout(() => setItems(prev => prev.filter(prevItem => prevItem !== item)), 1000)
  }, [containerRef])

  useEffect(() => {
    if (enabled) {
      const container = containerRef?.current
      container?.addEventListener('click', handleClick)

      return () => {
        container?.removeEventListener('click', handleClick)
      }
    }
  }, [containerRef, enabled, handleClick])

  return (
    <>
      {children}
      {items.map(({key, width, height, left, top}) => (
        <div className={styles.item} key={key} style={{width, height, left, top}} />
      ))}
    </>
  )
}