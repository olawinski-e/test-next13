import React from 'react'
import styles from '../../src/app/styles/page.module.scss'
import DefaultLayout from './components/layouts/DefaultLayout'

export default function Home({ children }) {
  return (
    <main className={styles.main}>
      <DefaultLayout>
        <h1>Broke And Abroad TO DO</h1>
        <main>{children}</main>
      </DefaultLayout>
    </main>
  )
}
