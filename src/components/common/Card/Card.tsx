import classNames from 'classnames'
import React from 'react'
import styles from './Card.module.scss'

interface CardProps {
  children: React.ReactNode
  todoStatus: boolean
}

export default function Card({ children, todoStatus }: CardProps) {
  return (
    <div
      className={classNames(styles.card, {
        [styles[`status--completed`]]: todoStatus === true
      })}
    >
      {children}
    </div>
  )
}
