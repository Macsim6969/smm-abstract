export interface Pricing{
  title: string
  description: string
  cardsPrice: CardsPrice[]
}

export interface CardsPrice{
  titlePlan: string
  count: string
  time: string
  content: string
  btn: string
  link: string
}