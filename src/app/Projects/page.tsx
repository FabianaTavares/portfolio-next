import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard'
import { projects } from '@/data/projects-data'
import styles from './Projects.module.scss'

export default function ProjectsPage() {
  const orderedProjects = [...projects].sort((a, b) => a.order - b.order)

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Projetos</h1>
          <p>
            Projetos reais desenvolvidos com foco em arquitetura, escalabilidade
            e experiência do usuário.
          </p>
        </header>

        <section className={styles.grid}>
          {orderedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </div>
    </main>
  )
}
