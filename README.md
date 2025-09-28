# Notion Blog Portfolio

My personal portfolio and blog website powered by Notion CMS and built with Next.js. Features a dynamic blog system, responsive design, and optimized performance.

## Features

- **Portfolio Homepage**: Personal introduction, experience timeline, projects showcase, and contact information
- **Notion-Powered Blog**: Dynamic blog posts fetched from Notion database with MDX rendering
- **Advanced Filtering**: Tag-based filtering and sorting (latest/oldest) for blog posts
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Built with shadcn/ui components and custom animations
- **SEO Optimized**: Dynamic metadata, sitemaps, and Open Graph images
- **Dark/Light Theme**: Theme toggle with system preference support
- **Comments System**: Giscus integration for blog post discussions
- **Performance**: Optimized with Next.js 15, caching, and static generation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **UI Components**: shadcn/ui with Radix UI primitives
- **CMS**: Notion API with notion-to-markdown
- **Content**: MDX with syntax highlighting (Shiki)
- **State Management**: TanStack Query for data fetching
- **Comments**: Giscus (GitHub Discussions)
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+
- Notion account with a database setup
- Git

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/esunn0412/notion-blog.git
   cd notion-blog
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   NOTION_TOKEN=your_notion_integration_token
   NOTION_DATABASE_ID=your_notion_database_id
   NEXT_PUBLIC_SITE_URL=your_domain_or_localhost:3000
   ```

4. **Notion Database Setup**
   Create a Notion database with these properties:

   - `Title` (Title)
   - `Description` (Rich text)
   - `Tags` (Multi-select)
   - `Status` (Select: Published, Draft)
   - `Date` (Date)
   - `Author` (Person)
   - `Slug` (Rich text)

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages and components
│   ├── _components/       # Blog-specific components
│   └── api/posts/         # API routes for posts
├── components/            # Reusable UI components
│   ├── features/          # Feature-specific components
│   ├── layouts/           # Layout components
│   ├── theme/             # Theme-related components
│   └── ui/                # shadcn/ui components
├── data/                  # Static data (projects, experience, contact)
├── lib/                   # Utility functions and Notion API
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## Configuration

### Personal Data

Update your personal information in:

- `data/ExperienceData.tsx` - Work experience
- `data/ProjectData.tsx` - Project showcase
- `data/ContactData.tsx` - Contact methods
- `components/features/home/About.tsx` - Personal bio

### Styling

- `app/globals.css` - Global styles and CSS variables
- Tailwind classes throughout components
- Theme colors defined in CSS custom properties

### Giscus Comments

Configure in `components/GiscusComments.tsx`:

- Replace repo details with your GitHub repository
- Set up GitHub Discussions in your repository

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format with Prettier
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Environment Variables for Production

```env
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
NEXT_PUBLIC_SITE_URL=your_production_domain
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

**Taeeun Kim** - [GitHub](https://github.com/esunn0412) | [LinkedIn](https://www.linkedin.com/in/taeeunnkim/)
