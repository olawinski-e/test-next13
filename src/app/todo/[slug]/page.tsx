import React from 'react'
import DefaultLayout from '../../../components/layouts/DefaultLayout'
import TodoDetails from '../../../components/modules/Todo/TodoDetails/TodoDetails'
import { getOneTodoItem } from '../../../services/todo.service'
import styles from '../../../styles/page.module.scss'

export default async function TodoDetailsPage({ params }: { params: { slug: string } }) {
  const todo = await getOneTodoItem(+params.slug)

  return (
    <main className={styles.main}>
      <DefaultLayout>
        <TodoDetails {...todo} />
      </DefaultLayout>
    </main>
  )
}
