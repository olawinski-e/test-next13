import Link from 'next/link'
import React from 'react'
import { capitalize } from '../../../utils/capitalize'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <li>
            <Link href="https://estelleolawinski.com" target="_blank" className="w-32">
              {capitalize('premier site')}
            </Link>
          </li>
          <li>
            <Link href="https://estelle.dev" target="_blank" className="w-32">
              {capitalize('site actuel')}
            </Link>
          </li>
        </ul>
        <p>
          {new Date().getFullYear()} @ {capitalize('olawinski-e')}.
        </p>
        <Link href="https://www.brokeandabroad.com">Broke And Abroad</Link>
      </div>
    </footer>
  )
}
