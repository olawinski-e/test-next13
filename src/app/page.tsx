import React from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'
import AddNewTodo from '../components/modules/Todo/AddNewTodo/AddNewTodo'
import TodoList from '../components/modules/Todo/TodoList/TodoList'
import styles from '../styles/page.module.scss'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <DefaultLayout>
        <AddNewTodo />

        <TodoList />
      </DefaultLayout>
    </main>
  )
}
