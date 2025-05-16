"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import {
  Mail,
  Globe,
  Heart,
  BookOpen,
  MessageSquare,
} from "lucide-react";

const cardData = [
  {
    title: "Discord",
    link: "https://discord.com/invite/example",
    icon: MessageSquare,
  },
  {
    title: "Website",
    link: "https://yourwebsite.com",
    icon: Globe,
  },
  {
    title: "Donate",
    link: "https://donate.example.com",
    icon: Heart,
  },
  {
    title: "Email",
    link: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    title: "Blog",
    link: "https://blog.example.com",
    icon: BookOpen,
  },
];

const socialIcons = [
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com",
    label: "GitHub",
  },
];

export default function Social() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen items-center justify-center gap-10 p-6 m-17">

        <div className="flex flex-col items-center gap-6">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
        <h1 className="text-5xl lg:text-5xl text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
            Follow Us
            </span>
        </h1>

        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-purple-700 bg-[#181818] overflow-hidden m-4"
        >
            <Image
            src="/images/HackUnited2.png"
            alt="HackUnited Logo"
            layout="fill"
            objectFit="cover"
            />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
            {socialIcons.map((item, idx) => (
            <Link href={item.link} key={idx} target="_blank" rel="noopener noreferrer">
                <Button
                variant="outline"
                size="icon"
                className="text-xl text-white hover:text-purple-500 transition-colors"
                aria-label={item.label}
                >
                {item.icon}
                </Button>
            </Link>
            ))}
        </div>
        </motion.div>
        </div>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.9,
            type: "spring",
            bounce: 0.2,
            delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl bg-black/30 p-4 border hover:border-purple-500"
        >
            {cardData.map(({ title, link, icon: Icon }, index) => (
                <Link href={link} key={index} target="_blank" rel="noopener noreferrer">
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-60 rounded-xl bg-black/50 border border-gray-700 hover:border-purple-500 shadow-lg text-white p-4 text-left flex flex-col gap-4 transition-all"
                    >
                    <CardHeader className="flex items-center justify-center p-0">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-700/20 text-purple-400">
                        <Icon size={28} />
                        </div>
                    </CardHeader>
                    <CardContent className="text-center">
                        <h2 className="text-lg font-semibold">{title}</h2>
                    </CardContent>
                    </motion.button>
                </Link>
                ))}

        </motion.div>
    </div>
  );
}
