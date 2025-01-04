import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/components/lib/types'

export function Card({ post }: { post: Post }) {
  return (
    <div className="bg-yellow-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow  ">
      <div className="aspect-[3/2] relative">
        <Image 
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{post.summary}</p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">{post.author}</p>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

