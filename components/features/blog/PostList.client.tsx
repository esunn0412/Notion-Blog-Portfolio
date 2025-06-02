'use client';

import Link from 'next/link';
import { PostCard } from '@/components/features/blog/PostCard';
import type { Post } from '@/types/blog';
import { useEffect, useState } from 'react';

export default function PostListClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="grid gap-4">
      {posts.map((post, i) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <PostCard post={post} isFirst={i === 0} />
        </Link>
      ))}
    </div>
  );
}
