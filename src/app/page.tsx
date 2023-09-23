import React from 'react'
import styles from '../../src/app/styles/page.module.scss'
import DefaultLayout from './components/layouts/DefaultLayout'

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <DefaultLayout>
        <div className={styles.homeContainer}>
          <h1 className={styles.homeTitle}>Broke And Abroad TO DO</h1>
        </div>
      </DefaultLayout>
    </main>
  )
}
