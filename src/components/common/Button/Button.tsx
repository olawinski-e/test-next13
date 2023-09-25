import classNames from 'classnames'
import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  onClick?: () => void
  size: 'small' | 'medium' | 'large' | 'wide'
  primary?: boolean
  secondary?: boolean
  severity?: 'info' | 'warning' | 'danger' | 'success' | ''
  disabled?: boolean
  label: string
  type?: 'button' | 'submit'
}

export default function Button({
  disabled = false,
  label,
  primary = false,
  severity = '',
  secondary = false,
  size = 'medium',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.customButton, {
        [styles[`customButton--size-${size}`]]: size,
        [styles['customButton--primary']]: primary,
        [styles['customButton--secondary']]: secondary,
        [styles[`customButton--${severity}`]]: severity
      })}
      type={type}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  )
}
