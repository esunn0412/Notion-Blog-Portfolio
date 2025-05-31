import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PostCard } from '@/components/features/blog/PostCard';
import Link from 'next/link';
import TagSection from '@/app/_components/TagSection';
import ProfileSection from '@/app/_components/ProfileSection';
import ContactSection from '@/app/_components/ContactSection';

const mockTags = [
  { id: 'all', name: '전체', count: 20 },
  { id: 'html', name: 'HTML', count: 10 },
  { id: 'css', name: 'CSS', count: 5 },
  { id: 'javascript', name: 'JavaScript', count: 3 },
  { id: 'react', name: 'React', count: 3 },
  { id: 'nextjs', name: 'Next.js', count: 3 },
];

const mockPosts = [
  {
    id: '1',
    title: 'Next.js 13으로 블로그 만들기',
    description: 'Next.js 13과 Notion API를 활용하여 개인 블로그를 만드는 방법을 알아봅니다.',
    coverImage: 'https://picsum.photos/800/400',
    tags: [
      { id: '1', name: 'Next.js', count: 1 },
      { id: '2', name: 'React', count: 1 },
    ],
    authors: '짐코딩',
    date: '2024-02-01',
  },
  {
    id: '2',
    title: 'TypeScript 기초 다지기',
    description: 'TypeScript의 기본 문법과 실전에서 자주 사용되는 패턴들을 살펴봅니다.',
    coverImage: 'https://picsum.photos/800/401',
    tags: [
      { id: '3', name: 'TypeScript', count: 1 },
      { id: '4', name: 'JavaScript', count: 1 },
    ],
    authors: '짐코딩',
    date: '2024-01-15',
  },
];

export default function Home() {
  return (
    // min-h-screen assures minimum screen height,
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* left sidebar */}
        <TagSection tags={mockTags} />

        {/* main area */}
        <div className="space-y-8">
          {/* section title and sort box */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Blog List</h2>
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="select sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">latest</SelectItem>
                <SelectItem value="oldest">oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Blog Card Grid */}
          <div className="grid gap-4">
            {/* Blog card repeats */}
            {mockPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <PostCard key={post.id} post={post} />
              </Link>
            ))}
          </div>
        </div>

        {/* right sidebar */}
        <aside className="flex flex-col gap-6">
          <ProfileSection />

          <ContactSection />
        </aside>
      </div>
    </div>
  );
}
