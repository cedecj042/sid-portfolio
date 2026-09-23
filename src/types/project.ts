export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  links: ProjectLink[]
  accent: string
}
