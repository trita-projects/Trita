import * as React from "react"
import { Link } from "gatsby"

import { primaryNav } from "../utils/routes"
import Logo from "./Logo"

type NavbarProps = {
  siteTitle: string
}

export default function Navbar({ siteTitle }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl pointer-events-none">
      {/* Desktop Nav Bar */}
      <div className="flex items-center justify-between rounded-full border border-border bg-background/80 px-3 py-2 shadow-soft backdrop-blur-md transition-shadow hover:shadow-lift lg:px-4 pointer-events-auto">
        <div className="flex items-center gap-2 pl-3">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-warm shadow-soft transition group-hover:scale-105">
              <Logo className="h-10 w-10" />
            </span>
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              {siteTitle}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative flex items-center rounded-full px-4 py-2 font-body text-sm font-bold text-foreground transition-all hover:text-primary"
              activeClassName="active !bg-primary/10 !text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 pr-1 lg:hidden">
          <button
            type="button"
            className="flex h-10 items-center justify-center rounded-full border border-border bg-muted/20 px-5 font-body text-sm font-bold text-foreground transition-all active:scale-95 hover:bg-muted/30"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen(v => !v)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        className={`${
          isOpen ? "pointer-events-auto mt-3 translate-y-0 opacity-100 max-h-[70vh] p-2 border border-border" : "pointer-events-none mt-0 -translate-y-2 opacity-0 max-h-0 p-0 border-none"
        } overflow-hidden rounded-3xl bg-background/95 shadow-lift backdrop-blur-md transition-all duration-300 lg:hidden`}
      >
        <nav className="grid max-h-[70vh] overflow-y-auto gap-1 p-2" aria-label="Mobile">
          {primaryNav.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center justify-between rounded-2xl px-5 py-3 font-body text-base font-bold text-muted-foreground transition-all active:bg-muted/10 hover:text-foreground"
              activeClassName="!bg-primary/10 !text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
