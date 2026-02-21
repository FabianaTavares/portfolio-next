import styles from './FeaturedProjects.module.scss'

const projects = [
  {
    title: 'E-commerce Escalável',
    description:
      'Arquitetura frontend performática utilizando Next.js com SSR e otimizações avançadas.',
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Interface moderna com foco em dados em tempo real e experiência fluida.',
  },
  {
    title: 'SaaS Plataforma B2B',
    description:
      'Sistema robusto com autenticação segura e arquitetura modular.',
  },
]

export default function FeaturedProjects() {
  return (
    <div className={styles.wrapper} id="projetos">
      <div className={styles.header}>
        <h2>Projetos em Destaque</h2>
        <p>
          Soluções construídas com foco em performance, escalabilidade e
          experiência.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
