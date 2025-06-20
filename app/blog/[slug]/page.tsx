import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, User } from 'lucide-react';
import { getPostBySlug, getPublishedPosts } from '@/lib/notion';
import { formatDate } from '@/lib/date';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypePrettyCode from 'rehype-pretty-code';
import { compile } from '@mdx-js/mdx';
import withSlugs from 'rehype-slug';
import withToc from '@stefanprobst/rehype-extract-toc';
import withTocExport from '@stefanprobst/rehype-extract-toc/mdx';
import GiscusComments from '@/components/GiscusComments';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post does not exist.',
    };
  }

  return {
    title: post.title,
    description: post.description || `${post.title} - Taeeun blog`,
    keywords: post.tags,
    authors: [{ name: post.author || 'Taeeun Kim' }],
    publisher: 'Taeeun Kim',
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description || 'A blog post on Taeeun Kim’s blog.',
      url: `blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modifiedDate,
      authors: post.author || 'Taeeun Kim',
      tags: post.tags,
    },
  };
}

interface TocEntry {
  value: string;
  depth: number;
  id?: string;
  children?: Array<TocEntry>;
}

export const generateStaticParams = async () => {
  const { posts } = await getPublishedPosts({});
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const revalidate = 3600;

function TableOfContentsLink({ item }: { item: TocEntry }) {
  return (
    <div className="space-y-2">
      <Link
        key={item.id}
        href={`#${item.id}`}
        className={`hover:text-foreground text-muted-foreground block font-medium transition-colors`}
      >
        {item.value}
      </Link>
      {item.children && item.children.length > 0 && (
        <div className="space-y-2 pl-4">
          {item.children.map((subItem) => (
            <TableOfContentsLink key={subItem.id} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const { markdown, post } = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const { data } = await compile(markdown, {
    rehypePlugins: [withSlugs, withToc, withTocExport],
  });

  return (
    <div className="container py-6 md:py-8 lg:py-12">
      <div className="flex gap-4 md:gap-8">
        {/* <aside className="hidden md:block">add content later</aside> */}
        <section className="flex-1 space-y-8">
          {/* 블로그 헤더 */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                {post.tags?.map((tag) => (
                  <Badge key={tag} className="bg-[var(--highlight)]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>
            </div>

            {/* 메타 정보 */}
            <div className="text-muted-foreground flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <User className="size-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="size-4" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>

          <Separator className="my-12" />
          {/* mobile 목차 */}
          <div className="sticky top-[var(--sticky-top)] mb-6 md:hidden">
            <details className="bg-muted/60 rounded-lg p-4 backdrop-blur-sm">
              <summary className="cursor-pointer text-lg font-semibold"> 목차</summary>
              <nav className="mt-3 space-y-3 text-sm">
                {data?.toc?.map((item) => <TableOfContentsLink key={item.id} item={item} />)}
              </nav>
            </details>
          </div>

          {/* 블로그 본문 */}

          <div className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-[var(--header-height)] w-full max-w-3xl">
            <MDXRemote
              source={markdown}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSanitize, rehypePrettyCode, withSlugs],
                },
              }}
            />
          </div>

          <Separator className="my-16" />

          {/* 댓글 영역 */}
          <GiscusComments />
        </section>

        <aside className="relative hidden md:block">
          <div className="sticky top-[var(--sticky-top))]">
            <div className="bg-muted/50 space-y-4 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">목차</h3>
              <nav className="space-y-3 text-sm">
                {/* {mockTableOfContents.map((item) => (
                  <TableOfContentsLink key={item.id} item={item} />
                ))} */}
                {data?.toc?.map((item: TocEntry) => (
                  <TableOfContentsLink key={item.id} item={item} />
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
