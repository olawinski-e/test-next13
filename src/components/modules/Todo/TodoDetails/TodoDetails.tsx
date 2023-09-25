'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ITodo } from '../../../../types/types'
import { capitalize } from '../../../../utils/capitalize'
import Card from '../../../common/Card'
import styles from './TodoDetails.module.scss'

export default function TodoDetails({ id, title, completed }: ITodo) {
  return (
    <section className={styles.todoDetailsSection}>
      <Card todoStatus={completed}>
        <div className={styles.todoDetailsContainer}>
          <header className={styles.todoDetailsHeader}>
            <p className={styles.todoDetailsHeaderLink}>
              Todo n°{id} <Link href="..">{capitalize('go back')}</Link>
            </p>
            <div className={styles.todoDetailsImg}>
              <Image
                src={`https://api.slingacademy.com/public/sample-photos/${id}.jpeg`}
                fill={true}
                alt="random picture"
              />
            </div>
            <h2>{title}</h2>
          </header>
          <p>bla - bla - bla</p>
          ...
        </div>
      </Card>
    </section>
  )
}
