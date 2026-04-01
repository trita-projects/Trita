import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

type SiteLayoutProps = {
  children: React.ReactNode
  fullWidth?: boolean
}

export default function SiteLayout({ children, fullWidth = false }: SiteLayoutProps) {
  const data = useStaticQuery(graphql`
    query SiteLayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = (data.site.siteMetadata?.title as string | undefined) ?? `Trita`

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar siteTitle={siteTitle} />
      <main className={`${fullWidth ? "" : "mx-auto w-full max-w-6xl px-4 pt-32 pb-10 sm:px-6"}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
