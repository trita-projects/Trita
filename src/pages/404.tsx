import * as React from "react"
import { Link } from "gatsby"
import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

export default function NotFoundPage() {
  return (
    <SiteLayout>
      <div className="py-12 text-center">
        <div className="relative inline-block">
          <h1 className="font-display text-9xl font-bold text-primary">404</h1>
          <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-secondary/10 blur-2xl -z-10" />
          <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl -z-10" />
        </div>
        <h2 className="mt-6 font-heading text-3xl font-bold text-foreground">Page Not Found</h2>
        <p className="mt-4 max-w-md mx-auto font-body text-base leading-relaxed text-muted-foreground">
          The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button to="/" className="rounded-full px-8 py-3">Go to Home</Button>
          <Button to="/contact" variant="secondary" className="rounded-full px-8 py-3">Contact Us</Button>
        </div>
      </div>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="404: Not Found" />
