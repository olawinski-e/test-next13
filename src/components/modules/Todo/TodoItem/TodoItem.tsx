'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { updateTodoItem, deleteTodoItem } from '../../../../services/todo.service'
import { ITodo } from '../../../../types/types'
import Button from '../../../common/Button'
import Card from '../../../common/Card'
import Input from '../../../common/Input'
import styles from './TodoItem.module.scss'

export default function TodoItem({ id, title, completed }: ITodo) {
  async function updateTodo(e) {
    e.stopPropagation()
    await updateTodoItem(id, e.target.checked)
  }

  async function deleteTodo() {
    await deleteTodoItem(id)
  }

  return (
    <Card todoStatus={completed}>
      <div className={styles.linkCard}>
        <div className={styles.todoItemImg}>
          <Image
            src={`https://api.slingacademy.com/public/sample-photos/${id}.jpeg`}
            fill={true}
            alt="random picture"
          />
        </div>
        <div className={styles.todoItem}>
          <div className={styles.todoItemButtons}>
            <Input id={id} type="checkbox" completed={completed} onChange={(e) => updateTodo(e)} />
            <Button severity="danger" size="small" label="X" onClick={deleteTodo} />
          </div>
          <h3>{title}</h3>
          <Link href={`/todo/${id}`}>
            <h4 className={styles.seeMore}>Voir +</h4>
          </Link>
        </div>
      </div>
    </Card>
  )
}
