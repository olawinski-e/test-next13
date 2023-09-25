import React from 'react'
import { getTodoList } from '../../../../services/todo.service'
import TodoItem from '../TodoItem'
import styles from './TodoList.module.scss'

export default async function TodoList() {
  const todos = await getTodoList()

  return (
    <div className={styles.todoListContainer}>
      <ul className={styles.todoListUl}>
        {todos?.map((todo) => {
          return (
            <li key={todo.id} className={styles.todoLi}>
              <TodoItem {...todo} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
