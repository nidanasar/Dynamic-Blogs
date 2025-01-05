'use client'

import { useState } from 'react'

interface Comment {
  id: number
  author: string
  content: string
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now(),
      author: 'Anonymous',
      content: newComment
    }

    setComments([...comments, comment])
    setNewComment('')
  }

  return (
    <div className="mt-8 ml-8 ">
      <h2 className="text-xl font-bold mb-4 ">Comments ({comments.length})</h2>
      
      <form onSubmit={handleSubmit} className="mb-6 ">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-1/2 p-4 border rounded mb-4 flex"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!newComment.trim()}
        >
          Post Comment
        </button>
      </form>

      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="border-b py-3">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.content}</p>
          </div>
        ))}
        
        {comments.length === 0 && (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  )
}

