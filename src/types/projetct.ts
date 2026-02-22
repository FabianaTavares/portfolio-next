export type ProjectType = 'freelancer' | 'empresa' | 'pessoal'
export type ProjectCategory = 'web' | 'mobile' | 'landing' | 'saas'

export type Project = {
  slug: string
  title: string
  subtitle: string
  type: ProjectType
  category: ProjectCategory
  featured: boolean
  stack: string[]
  shortDescription: string
  description: string[]
  details?: string[]
  challenges: string[]
  result: string[]
  link?: string
  images?: string[]
  order: number
  year: number
  role: string
}
