export interface Post {
    title: string
    slug: string
    image: string
    summary: string
    author: string
    content: {heading: string, points: string[]}[]
    date: string
    
  }
  
  