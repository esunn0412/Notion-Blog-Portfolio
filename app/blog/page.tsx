export default function Blog() {
  return (
    // min-h-screen assures minimum screen height,
    <div className="flex min-h-screen flex-col">
      {/* main area */}
      <main className="flex-1">
        <div className="container py-8">
          <div className="space-y-8">
            {/* section title */}
            <h2 className="text-3xl font-bold tracking-tight">Blog List</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
