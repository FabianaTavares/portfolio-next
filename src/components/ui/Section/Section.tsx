import { ReactNode } from 'react'
import styles from './Section.module.scss'
import clsx from 'clsx'

type SectionProps = {
  children: ReactNode
  surface?: boolean
}

export default function Section({ children, surface }: SectionProps) {
  return (
    <section
      className={clsx(styles.section, {
        [styles.surface]: surface,
      })}
    >
      {children}
    </section>
  )
}