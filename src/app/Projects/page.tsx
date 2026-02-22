import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  )
}
