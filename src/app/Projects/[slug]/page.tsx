import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard'
import { projects } from '@/data/projects-data'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import styles from './ProjectDetails.module.scss'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)

  const rotated = [
    ...projects.slice(currentIndex + 1),
    ...projects.slice(0, currentIndex),
  ]

  const otherProjects = rotated.slice(0, 3)

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* HERO */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>

            <div className={styles.meta}>
              <span>{project.year}</span>
              <span>{project.role}</span>
              <span>{project.category}</span>
            </div>

            <div className={styles.stack}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.images?.[0] && (
            <div className={styles.heroImage}>
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className={styles.image}
              />
            </div>
          )}
        </header>

        {/* DESCRIPTION */}
        <section className={styles.section}>
          <h2>Sobre o projeto</h2>
          {project.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </section>

        {/* DETAILS */}
        <section className={styles.section}>
          <h2>Principais funcionalidades</h2>
          <ul>
            {project?.details?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* CHALLENGES */}
        <section className={styles.section}>
          <h2>Desafios técnicos</h2>
          <ul>
            {project.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* RESULT */}
        <section className={styles.section}>
          <h2>Resultados</h2>
          <ul>
            {project.result.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {project.images && project?.images?.length > 1 && (
          <section className={styles.gallery}>
            {project.images.slice(1).map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image src={img} alt="" fill className={styles.image} />
              </div>
            ))}
          </section>
        )}

        {/* LINK */}
        {project.link && (
          <section className={styles.section}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="buttonPrimary"
            >
              Ver projeto
            </a>
          </section>
        )}

        {/* OTHER PROJECTS */}
        <footer className={styles.moreProjects}>
          <h2>Continue Explorando</h2>

          <div className={styles.projectsGrid}>
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </footer>
      </div>
    </main>
  )
}
