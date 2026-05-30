import Link from 'next/link'
import styles from './ContactCTA.module.scss'

export default function ContactCTA() {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Vamos construir algo incrível juntos.</h2>

        <p className={styles.description}>
          Estou disponível para projetos, freelas ou oportunidades full-time.
        </p>

        <Link href="/contact" className={styles.button}>
          Entrar em Contato
        </Link>
      </div>
    </section>
  )
}
