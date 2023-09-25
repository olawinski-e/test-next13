'use client'

import React from 'react'
import { createTodoItem } from '../../../../services/todo.service'
import Button from '../../../common/Button'
import Input from '../../../common/Input'
import styles from './AddNewTodo.module.scss'

export default function AddNewTodo() {
  return (
    <form action={createTodoItem} className={styles.addNewTodo}>
      <Input type="text" size="full" name="title" placeholder="Create a new todo..." />

      <div>
        <Button type="submit" size="medium" label="Add" primary />
      </div>
    </form>
  )
}
