import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/components/lib/blog-data'

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div className=" bg-[url(/image/bg3.jpg)] bg-cover bg-center min-h-screen">
      <div className="container mx-auto px-4">
        <main className="flex flex-col items-center justify-center min-h-screen text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to the
            <span className="block text-blue-600">Winter Remedies Blog</span>
          </h1>
          <p className="text-xl text-gray-900 mb-12 max-w-2xl font-sans">
            Discover natural ways to stay healthy and comfortable during the winter season. 
            From herbal remedies to lifestyle tips, we have got you covered.
          </p>
          <Link href="/blog">
            <Button size="lg" className="group font-bold hover:scale-150 transition-transform">
              Explore Our Blog
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          {/* Latest Posts Section */}
          <section className="mt-8 w-full ">
            <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.summary}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60" />
        </main>
      </div>
    </div>
  )
}


