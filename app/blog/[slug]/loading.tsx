import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container py-6 md:py-8 lg:py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Main Content */}
        <section className="flex-1 space-y-8">
          {/* Tags */}
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-12 rounded-full" />
          </div>

          {/* Title */}
          <Skeleton className="h-10 w-3/4" />

          {/* Meta (Author + Date) */}
          <div className="text-muted-foreground flex gap-4 text-sm">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-20" />
          </div>

          {/* Separator */}
          <Skeleton className="bg-border h-px w-full" />

          {/* image skeleton */}
          <Skeleton className="h-64 w-full rounded-lg" />

          {/* Paragraph skeletons */}
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-5 w-1/2" />
          </div>

          <Skeleton className="bg-border h-px w-full" />
        </section>

        {/* TOC (right sidebar) */}
        <aside className="hidden w-[260px] md:block">
          <div className="bg-muted/30 sticky top-[var(--sticky-top)] space-y-4 rounded-lg p-6 backdrop-blur-sm">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-5 w-full" />
          </div>
        </aside>
      </div>
    </div>
  );
}
