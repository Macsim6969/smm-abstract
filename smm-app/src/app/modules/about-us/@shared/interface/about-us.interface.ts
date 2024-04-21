export interface AboutUs{
  titleHeader: string
  comments: AboutUsComments[]
}

export interface AboutUsComments{
  fullName: string
  job: string
  comment: string
  avatar: string
  likeIS: number
}