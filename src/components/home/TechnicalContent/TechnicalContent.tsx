import Link from 'next/link'
import styles from './TechnicalContent.module.scss'

const featuredPosts = [
  {
    title: 'Arquitetura Escalável com Next.js App Router',
    description:
      'Estratégias modernas para estruturar aplicações performáticas com o novo App Router.',
  },
  {
    title: 'Clean Architecture no Frontend',
    description:
      'Separação de responsabilidades aplicada a aplicações React modernas.',
  },
  {
    title: 'Performance Web: além do Lighthouse',
    description: 'Como otimizar métricas reais de usuário (Core Web Vitals).',
  },
]

export default function TechnicalContent() {
  return (
    <section className={styles.section} id="content">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Conteúdo Técnico</h2>
          <p>
            Artigos, estudos e reflexões sobre arquitetura, performance e
            engenharia de software.
          </p>
        </header>

        <div className={styles.grid}>
          {featuredPosts.map((post) => (
            <article key={post.title} className={styles.card}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/content" className={styles.cta}>
            Ver todos os conteúdos →
          </Link>
        </div>
      </div>
    </section>
  )
}
