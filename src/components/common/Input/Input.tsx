import classNames from 'classnames'
import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  id?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: 'text' | 'checkbox' | string
  size?: string
  completed?: boolean
  label?: string
  name?: string
}

export default function Input({
  label,
  onChange,
  type = 'text',
  placeholder = 'Rechercher...',
  size = '30%',
  completed = false,
  id,
  ...props
}: InputProps) {
  return (
    <>
      {type === 'text' ? (
        <>
          <input
            id={id?.toString()}
            type="text"
            defaultChecked={completed}
            className={classNames(styles.customInputText, {
              [styles[`width--full`]]: size === 'full'
            })}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
          />
          {label ? <label htmlFor={id?.toString()}>{label}</label> : ''}
        </>
      ) : type === 'checkbox' ? (
        <>
          <input
            id="cb1"
            type="checkbox"
            defaultChecked={completed}
            onChange={onChange}
            className={styles.customInputCheckbox}
            {...props}
          />
        </>
      ) : (
        <input type={type} className={styles.customInput} {...props} />
      )}
    </>
  )
}
