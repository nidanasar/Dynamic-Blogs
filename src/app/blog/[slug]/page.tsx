import { blogPosts } from '@/components/lib/blog-data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-green-100 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <p>{post.author}</p>
          <span>•</span>
          <p>{new Date(post.date).toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content.map((section, index) => (
            <div key={index}>
              <h2>{section.heading}</h2>
              <ul>
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

