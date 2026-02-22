import { Project } from '@/types/projetct'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectCard.module.scss'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      {project.images?.[0] && (
        <div className={styles.imageWrapper}>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>

        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
