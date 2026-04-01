import * as React from "react"
import { Link } from "gatsby"

import SiteLayout from "./SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

interface BrandPageLayoutProps {
  title: string
  subtitle: string
  logo: string
  website?: string
  description: React.ReactNode
  children: React.ReactNode
}

export default function BrandPageLayout({
  title,
  subtitle,
  logo,
  website,
  description,
  children,
}: BrandPageLayoutProps) {
  return (
    <SiteLayout>
      <Seo title={title} pathname={`/brands/${title.toLowerCase().replace(/\s/g, "-")}`} />
      <header className="space-y-6">
        <div>
          <Link to="/brands" className="group flex w-fit items-center gap-2 transition-all active:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition group-hover:-translate-x-1 text-primary"
            >
              <path d="m12 19-7-7 7-7" />
            </svg>
            <span className="font-body text-sm font-semibold text-muted-foreground transition-all group-hover:text-foreground">
              {subtitle}
            </span>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex items-center justify-center rounded-2xl bg-surface-warm p-4 w-fit">
            <img src={logo} alt={`${title} logo`} className="h-16 w-auto max-w-40 object-contain" />
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">{title}</h1>
        </div>
        <div className="max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">{description}</div>
        {website && (
          <div className="pt-2">
            <Button href={website} target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-base rounded-full">
              Visit {new URL(website).hostname}
            </Button>
          </div>
        )}
      </header>

      <section className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{children}</section>
    </SiteLayout>
  )
}
