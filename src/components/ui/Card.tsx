import * as React from "react"

type CardProps = {
  className?: string
  children: React.ReactNode
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={
        "rounded-2xl border border-ink-950/10 bg-white p-6 shadow-soft transition will-change-transform hover:-translate-y-0.5 hover:border-ink-950/15 hover:shadow-lift " +
        (className ?? "")
      }
    >
      {children}
    </div>
  )
}
