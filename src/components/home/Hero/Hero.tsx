import Image from 'next/image'
import profileImg from '../../../../public/avatars/profile.png'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Desenvolvedor Frontend focado em performance e experiências digitais
          escaláveis.
        </h1>

        <p className={styles.subtitle}>
          Especialista em React, Next.js e arquitetura frontend orientada a
          produto.
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.primaryButton}>
            Ver Projetos
          </a>

          <a href="#contato" className={styles.secondaryButton}>
            Vamos Conversar
          </a>
        </div>
      </div>

      <div className={styles.avatarWrapper}>
        <Image
          src={profileImg}
          alt="Foto de Perfil"
          width={420}
          height={420}
          priority
          className={styles.avatar}
        />
      </div>
    </div>
  )
}
