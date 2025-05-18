"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Donate", href: "/donate" },
  { title: "Team", href: "/team" },
  { title: "Apply", href: "/apply" },
  { title: "Social", href: "/social" },
  { title: "Blog", href: "#" },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="fixed z-50 w-full flex justify-center mt-4 px-6">
      <nav className="w-full max-w-6xl bg-white/5 shadow-xl backdrop-blur-lg border border-white/10 text-purple-200 rounded-2xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-purple-300">
            Hack United
          </div>

          <div className="hidden md:flex gap-2">
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
            <Button
              variant="ghost"
              size="sm"
              className="text-sm border border-purple-500 hover:border-purple-300 transition-colors cursor-pointer"
            >
              <Link href="https://unitedhacks.hackunited.org/">Hackathon</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-300 hover:bg-purple-800"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-start gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.title}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-sm border hover:border-purple-500 hover:bg-purple-900 transition-colors"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href={link.href}>{link.title}</Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-sm border hover:border-purple-100 hover:bg-purple-900 transition-colors cursor-pointer"
            >
              <Link href="https://unitedhacks.hackunited.org/">Hackathon</Link>
            </Button>
          </div>
        )}
      </nav>
    </div>
  )
}
