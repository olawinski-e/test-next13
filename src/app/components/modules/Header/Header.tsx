import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import logo from '../../../../../public/images/B&A_logo.svg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image src={logo} width={75} height={60} alt="logo side" />
        </Link>

        <ul>
          <li>
            <Link href="https://github.com/olawinski-e/BrokeAndAbroad" target="_blank">
              <AiFillGithub size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
