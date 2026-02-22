import { Project } from '@/types/projetct'
import Image from 'next/image'
import styles from './ProjectDetails.module.scss'

type Props = {
  project: Project
}

export default function ProjectDetails({ project }: Props) {
  return (
    <div className={styles.wrapper}>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>

          <div className={styles.stack}>
            {project.stack.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <a href={project.link} target="_blank" className="buttonPrimary">
              Ver projeto online
            </a>
          )}
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
      </div>

      {/* OVERVIEW */}
      <section className={styles.section}>
        <h2>Contexto</h2>
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      {/* DESAFIOS */}
      <section className={styles.section}>
        <h2>Desafios Técnicos</h2>
        <ul>
          {project.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* RESULTADOS */}
      <section className={styles.section}>
        <h2>Resultados</h2>
        <ul>
          {project.result.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* GALERIA */}
      {project.images && project.images.length > 1 && (
        <section className={styles.gallery}>
          {project.images.slice(1).map((img) => (
            <div key={img} className={styles.galleryItem}>
              <Image
                src={img}
                alt={project.title}
                fill
                className={styles.image}
              />
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
