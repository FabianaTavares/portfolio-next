import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.description}>
          © {new Date().getFullYear()} Fabiana Tavares. Todos os direitos
          reservados.
        </p>

        <div className={styles.links}>
          <a href="https://github.com/FabianaTavares" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/fabianatavares1" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
