import Link from "next/link";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t w-full border-purple-900 text-purple-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-600">
            HackUnited
            </h2>
            <p className="text-sm text-purple-400">Hack United is fiscally sponsored by Hack Club Bank<br/> a project by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).</p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <Link href="/about" className="hover:text-purple-500 transition-colors">humans@hackunited.org</Link>
            <Link href="/events" className="hover:text-purple-500 transition-colors">Media Kit</Link>
            <Link href="/initiatives" className="hover:text-purple-500 transition-colors">Donate</Link>
            <Link href="/contact" className="hover:text-purple-500 transition-colors">Sponsor</Link>
        </div>

        <div className="flex gap-4">
            <a href="mailto:team@hackunited.org" target="_blank" rel="noopener noreferrer">
            <Mail className="h-5 w-5 hover:text-purple-500" />
            </a>
            <a href="https://github.com/hackunited" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 hover:text-purple-500" />
            </a>
            <a href="https://twitter.com/hackunited" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 hover:text-purple-500" />
            </a>
            <a href="https://linkedin.com/company/hackunited" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 hover:text-purple-500" />
            </a>
        </div>
        </div>

        <div className="mt-8 text-center text-xs text-purple-500">
        © {new Date().getFullYear()} HackUnited. All rights reserved.
        </div>
    </footer>
  );
}
