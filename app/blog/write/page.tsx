import { createPostAction } from '@/app/actions/blog';
import { PostForm } from '@/components/features/blog/PostForm';
export default function WritePage() {
  return (
    <div className="container py-10">
      <PostForm action={createPostAction} />
    </div>
  );
}
