
import { Card } from '@/components/card';
import { blogPosts } from '@/components/lib/blog-data';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Winter Wellness Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
