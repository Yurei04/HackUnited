"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import {
  Mail,
  Globe,
  Heart,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const cardData = [
  { title: "Discord", link: "https://discord.com/invite/example", icon: MessageSquare },
  { title: "Website", link: "/", icon: Globe },
  { title: "Donate", link: "/donate", icon: Heart },
  { title: "Email", link: "mailto:hello@example.com", icon: Mail },
  { title: "Blog", link: "#", icon: BookOpen },
];

const socialIcons = [
  { icon: <FaLinkedin />, link: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaInstagram />, link: "https://instagram.com", label: "Instagram" },
  { icon: <FaTwitter />, link: "https://twitter.com", label: "Twitter" },
  { icon: <FaGithub />, link: "https://github.com", label: "GitHub" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Social() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center gap-10 p-6 mt-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
            Connect With Us
          </span>
        </h1>
        <p className="text-center text-purple-200 max-w-2xl mx-auto">
          Stay in the loop with the latest from Hack United. Whether you want to follow updates, join our community, or explore our work—here’s where you’ll find us across the web.
        </p>
        <Separator orientation="horizontal" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex lg:flex-row sm:flex-col items-center justify-center gap-10 w-full">
          <div
            ref={containerRef}
            className="flex flex-col w-lg rounded-2xl p-6 gap-4 mt-4 flex-wrap justify-center bg-black/50"
          >
            {cardData.map(({ title, link, icon: Icon }, index) => (
              <Link
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="stat-card bg-black/40 border border-purple-700 rounded-2xl p-5 shadow-lg backdrop-blur-md flex flex-row items-center justify-between text-center hover:border-purple-500 transition cursor-pointer"
                >
                  <h2 className="text-lg font-semibold text-white">{title}</h2>
                  <div className="rounded-full bg-purple-700/20 text-purple-400 p-1">
                    <Icon size={20} />
                  </div>
                </motion.div>
              </Link>
            ))}

            <div className="flex flex-row items-center justify-center gap-10 pt-4">
              {socialIcons.map(({ icon, link, label }, idx) => (
                <Link key={idx} href={link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 text-base text-white hover:text-purple-500 transition cursor-pointer"
                    aria-label={label}
                  >
                    {icon}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
