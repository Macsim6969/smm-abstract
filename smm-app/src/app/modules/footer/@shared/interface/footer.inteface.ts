export interface Footer {
  aboutTitle: string
  about: FooterLink[]
  featuresTitle: string
  features: FooterLink[]
  blogTitle: string
  blog: FooterLink[]
}

export interface FooterLink{
  name: string
  link: string
}