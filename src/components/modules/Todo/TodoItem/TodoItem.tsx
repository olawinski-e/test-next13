'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { updateTodoItem } from '../../../../services/todo.service'
import { ITodo } from '../../../../types/types'
import Button from '../../../common/Button'
import Card from '../../../common/Card'
import Input from '../../../common/Input'
import styles from './TodoItem.module.scss'

export default function TodoItem({ id, title, completed }: ITodo) {
  async function updateTodo(e) {
    await updateTodoItem(id, e.target.checked)
  }

  return (
    <Card todoStatus={completed}>
      <Link href={`/todo/${id}`} className={styles.linkCard}>
        <div className={styles.todoItemImg}>
          <Image
            src={`https://api.slingacademy.com/public/sample-photos/${id}.jpeg`}
            fill={true}
            alt="random picture"
          />
        </div>
        <div className={styles.todoItem}>
          <div className={styles.todoItemButtons}>
            <Input id={id} type="checkbox" completed={completed} onChange={updateTodo} />
            <Button severity="danger" size="small" label="X" />
          </div>
          <b>{title}</b>
        </div>
      </Link>
    </Card>
  )
}
