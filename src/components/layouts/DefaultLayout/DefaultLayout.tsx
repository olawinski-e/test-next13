import React from 'react'
import Footer from '../../modules/Footer'
import Header from '../../modules/Header'
import styles from './DefaultLayout.module.scss'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={styles.defaultLayoutMain}>{children}</main>
      <Footer />
    </>
  )
}
