import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

type SeoProps = {
  title: string
  description?: string
  pathname?: string
  image?: string
  children?: React.ReactNode
}

export default function Seo({ title, description, pathname, image, children }: SeoProps) {
  const data = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title as string | undefined
  const siteDescription = data.site.siteMetadata?.description as string | undefined
  const siteUrl = data.site.siteMetadata?.siteUrl as string | undefined

  const metaDescription = description ?? siteDescription ?? ``
  const canonical = siteUrl && pathname ? new URL(pathname, siteUrl).toString() : undefined
  const ogImage = siteUrl && image ? new URL(image, siteUrl).toString() : undefined

  return (
    <>
      <title>{siteTitle ? `${title} | ${siteTitle}` : title}</title>
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta name="description" content={metaDescription} />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}

      {children}
    </>
  )
}
