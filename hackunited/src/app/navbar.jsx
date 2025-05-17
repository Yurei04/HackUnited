"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Donate", href: "/donate" },
  { title: "Team", href: "/team" },
  { title: "Apply", href: "/apply" },
  { title: "Social", href: "/social" },
  { title: "Blog", href: "#" },
]

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full flex items-center justify-between bg-black/80 text-purple-200 px-15 py-4 shadow-md">
      <div className="text-lg font-semibold text-purple-300">Hack United</div>
      <div className="flex flex-wrap items-center gap-2">
        {navLinks.map((link) => (
          <Button
            key={link.title}
            variant="ghost"
            size="sm"
            className="text-xs border hover:border-purple-500 hover:bg-purple-900 transition-colors active:border-purple-200"
            asChild
          >
            <Link href={link.href}>{link.title}</Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}
