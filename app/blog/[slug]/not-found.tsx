import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col items-center gap-4 text-center">
        <div className="text-muted-foreground text-6xl font-bold">404</div>
        <h1 className="text-2xl font-semibold tracking-tight">
          We&apos;re unable to find requested page.
        </h1>
        <p className="text-muted-foreground">Requested page does not exist or has been moved.</p>
        <Button asChild className="mt-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="size-4" />
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
