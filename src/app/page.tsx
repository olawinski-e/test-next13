import React from 'react'
import styles from '../../src/app/styles/page.module.scss'
import DefaultLayout from './components/layouts/DefaultLayout'
import Listing from './components/modules/Listing/Listing'

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <h1 className={styles.title}>Broke And Abroad TO DO</h1>

        <Listing />
      </DefaultLayout>
    </main>
  )
}
