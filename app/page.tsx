import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    // min-h-screen assures minimum screen height,
    <div className="flex min-h-screen flex-col">
      {/* header area */}
      <header className="sticky top-0 z-50 border-b">
        <div className="container mx-auto flex h-14 items-center px-4">
          <a href="#" className="front-semibold text-xl">
            <span className="font-bold">Taeeun&apos;s Blog</span>
          </a>
          <nav className="ml-auto flex items-center gap-4">
            <a href="#" className="hover:text-primary font-medium">
              Home
            </a>
            <a href="#" className="hover:text-primary font-medium">
              Blog
            </a>
            <a href="#" className="hover:text-primary font-medium">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* main area */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* section title */}
            <h2 className="text-3xl font-bold tracking-tight">Blog List</h2>

            {/* Blog Card Grid */}
            <div className="space-y-4">
              {/* Blog card repeats */}
              {[1, 2, 3].map((i) => {
                return (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle>블로그 제목 {i}</CardTitle>
                      <CardDescription>
                        간단한 더미 블로그 설명입니다. 여러 줄의 텍스트가 있을
                        수 있습니다.{" "}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer area */}
      <footer className="border-t">
        <div className="container mx-auto flex h-14 items-center justify-center">
          <p className="text-muted-foreground text-sm">
            Built with Next.js, Tailwind CSS and shadcn/ui by Taeeun Kim
          </p>
        </div>
      </footer>
    </div>
  );
}
