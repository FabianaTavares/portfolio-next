'use client'

import Link from 'next/link'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Fabiana Tavares.dev
        </Link>

        <nav className={styles.nav}>
          <Link href="#projects">Projetos</Link>
          <Link href="/content">Conteúdo</Link>
          <Link href="#about">Sobre</Link>
          <Link href="#contact">Contato</Link>
        </nav>
      </div>
    </header>
  )
}
