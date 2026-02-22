import projectsData from '@/data/projects.json'
import Link from 'next/link'
import styles from './FeaturedProjects.module.scss'

export default function FeaturedProjects() {
  const featured = projectsData.projects.filter((p) => p.featured)

  return (
    <div className={styles.wrapper} id="projetos">
      <div className={styles.header}>
        <h2>Projetos em Destaque</h2>
        <p>
          Projetos reais desenvolvidos com foco em arquitetura, escalabilidade e
          experiência do usuário.
        </p>
      </div>

      <div className={styles.grid}>
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
          >
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
