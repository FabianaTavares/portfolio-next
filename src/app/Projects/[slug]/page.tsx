import projectsData from '@/data/projects.json'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  )
}
