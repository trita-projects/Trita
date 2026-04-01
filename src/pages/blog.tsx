import * as React from "react"
import { motion } from "framer-motion"
import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

type Article = {
  id: number
  title: string
  handle: string
  href: string
  excerpt: string
  published_at: string
  image: string | null
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return dateStr
  }
}

function BlogCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const href = article.href || `https://rollthedice.in/blogs/talk/${article.handle}`

  if (featured) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group col-span-full flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40 no-underline md:flex-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative h-56 flex-shrink-0 overflow-hidden bg-surface-warm md:h-auto md:w-80 lg:w-96">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted/20">
              <span className="font-body text-xs text-muted-foreground/40">Roll the Dice</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-border bg-primary/10 px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-primary">
                Latest
              </span>
              <span className="font-body text-xs font-bold text-muted-foreground/50">{formatDate(article.published_at)}</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground transition group-hover:text-primary sm:text-3xl">
              {article.title}
            </h2>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">{article.excerpt}…</p>
          </div>
          <span className="font-body text-sm font-bold text-primary transition group-hover:opacity-80">
            Read on Roll the Dice →
          </span>
        </div>
      </motion.a>
    )
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40 no-underline"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative mx-5 mt-5 overflow-hidden rounded-2xl bg-surface-warm" style={{ aspectRatio: "16/9" }}>
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted/20">
            <span className="font-body text-xs text-muted-foreground/40">Roll the Dice</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <div className="space-y-2">
          <span className="font-body text-xs font-bold text-muted-foreground/50">{formatDate(article.published_at)}</span>
          <h3 className="font-heading text-lg font-bold text-foreground transition group-hover:text-primary leading-snug">
            {article.title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-muted-foreground line-clamp-3">{article.excerpt}…</p>
        </div>
        <span className="font-body text-sm font-bold text-primary transition group-hover:opacity-80">
          Read on Roll the Dice →
        </span>
      </div>
    </motion.a>
  )
}

function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className="mx-5 mt-5 animate-pulse rounded-2xl bg-muted/20" style={{ aspectRatio: "16/9" }} />
      <div className="space-y-3 p-6">
        <div className="h-3 w-1/4 animate-pulse rounded-full bg-muted/20" />
        <div className="h-6 w-3/4 animate-pulse rounded-full bg-muted/20" />
        <div className="h-3 w-full animate-pulse rounded-full bg-muted/20" />
        <div className="h-3 w-2/3 animate-pulse rounded-full bg-muted/20" />
      </div>
    </div>
  )
}

export default function BlogIndexPage() {
  const [articles, setArticles] = React.useState<Article[]>([])
  const [status, setStatus] = React.useState<"loading" | "success" | "error">("loading")

  React.useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blog-posts")
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        
        const data = await response.json()
        const posts: Article[] = data?.articles ?? []
        setArticles(posts)
        setStatus(posts.length > 0 ? "success" : "error")
      } catch (error) {
        console.warn("Failed to fetch blog posts:", error)
        setStatus("error")
      }
    }

    if (typeof window !== 'undefined') {
      fetchBlogPosts()
    }
  }, [])

  const [featured, ...rest] = articles

  return (
    <SiteLayout>
      <header className="space-y-4 text-center">
        <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground">Blog</h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
          Stories behind Indian games, culture and play, parenting, strategy, and festival traditions — from the Roll the Dice team.
        </p>
      </header>

      <section className="mt-16">
        {status === "loading" && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-12 text-center shadow-soft">
            <p className="font-body text-base text-muted-foreground">
              Couldn't load posts right now. Read all articles directly on Roll the Dice.
            </p>
            <Button
              href="https://rollthedice.in/blogs/talk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-2.5 text-sm"
            >
              Visit the blog →
            </Button>
          </div>
        )}

        {status === "success" && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured && <BlogCard article={featured} featured />}
            {rest.map((article, i) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>

      {status === "success" && (
        <div className="mt-12 flex justify-center">
          <Button
            href="https://rollthedice.in/blogs/talk"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="rounded-full px-8 py-3 text-sm"
          >
            View all posts on Roll the Dice →
          </Button>
        </div>
      )}
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Blog" pathname="/blog" />
