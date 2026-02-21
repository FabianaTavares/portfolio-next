import styles from './ContactCTA.module.scss'

export default function ContactCTA() {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Vamos construir algo incrível juntos.</h2>

        <p className={styles.description}>
          Estou disponível para projetos, freelas ou oportunidades full-time.
        </p>

        <a href="mailto:seuemail@email.com" className={styles.button}>
          Entrar em Contato
        </a>
      </div>
    </section>
  )
}
