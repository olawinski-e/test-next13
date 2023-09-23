import React from 'react'
import Footer from '../../modules/Footer'
import Header from '../../modules/Header'
import styles from './DefaultLayout.module.scss'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
      <Footer />
    </>
  )
}

export default DefaultLayout
