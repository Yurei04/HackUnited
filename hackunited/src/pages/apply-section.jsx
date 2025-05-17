"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import {
  Megaphone,
  Video,
  Users,
  UserPlus,
  Mail,
  FileText,
  Globe,
  Bot,
  Paintbrush,
  Code2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const hackUnitedPositions = [
  {
    category: "Marketing",
    title: "Social Media Manager",
    icon: Megaphone,
    description: `
      Frequently post on platforms like X/Twitter, Instagram, and Threads.
      Collaborate with Graphic Designers to post high-quality content.
      Grow followers by being consistently active on assigned platform(s).
    `,
  },
  {
    category: "Marketing",
    title: "Short Form Content Creator",
    icon: Video,
    description: `
      Create engaging videos for Instagram Reels, TikTok, and YouTube Shorts.
      Stay on top of trends to maximize reach and engagement.
      Bonus: Editing experience with tools for reels.
    `,
  },
  {
    category: "Marketing",
    title: "Discord Promoter",
    icon: Users,
    description: `
      Promote Hack United server using provided methods.
      Engage with new communities and form STEM server partnerships.
      Post actively in promotion channels and attract members.
    `,
  },
  {
    category: "Human Resources",
    title: "Talent Acquisition Manager",
    icon: UserPlus,
    description: `
      Develop recruitment strategies, screen resumes, and conduct interviews.
      Manage hiring processes and improve recruitment based on metrics.
      Build positive candidate relationships.
    `,
  },
  {
    category: "Human Resources",
    title: "Outreach Manager",
    icon: Mail,
    description: `
      Reach new audiences by contacting entrepreneurs, sponsors, media, and companies.
      Form partnerships and secure backing for Hack United.
    `,
  },
  {
    category: "Community",
    title: "Community Team Member",
    icon: Users,
    description: `
      Boost engagement on Discord and beyond.
      Moderate discussions and maintain inclusive environments.
      Update community features like polls and challenges.
    `,
  },
  {
    category: "Community",
    title: "Article Writer",
    icon: FileText,
    description: `
      Write 1-2 page informative articles for https://blog.hackunited.org.
      Research trending topics and tailor content for teens.
      AI tools allowed — but keep it human-like!
    `,
  },
  {
    category: "Technology",
    title: "Web Developer",
    icon: Globe,
    description: `
      Maintain Hack United websites and add interactive features.
      Required: HTML/CSS/JS. Bonus: React, Tailwind, Node.js, Firebase.
    `,
  },
  {
    category: "Technology",
    title: "Discord Bot Developer",
    icon: Bot,
    description: `
      Develop and optimize Discord bots using discord.js or discord.py.
      Monitor and enhance bot functionality and uptime.
    `,
  },
  {
    category: "Technology",
    title: "Graphics Designer",
    icon: Paintbrush,
    description: `
      Create designs for events, merch, social media, and more.
      Use your favorite software. Bonus: Figma experience.
    `,
  },
  {
    category: "Technology",
    title: "Technical Team",
    icon: Code2,
    description: `
      Offer coding help in Discord, build coding challenges, and guide with AI tools.
      Recommended: Python, Java, or C++.
    `,
  },
];

const categories = ["All", ...Array.from(new Set(hackUnitedPositions.map((p) => p.category)))];


export default function ApplySection() {

const [selectedCategory, setSelectedCategory] = useState("All");

const filteredPositions =
    selectedCategory === "All"
    ? hackUnitedPositions
    : hackUnitedPositions.filter((p) => p.category === selectedCategory);
        
  return (
    <div className="flex flex-col w-full min-h-screen mt-15 px-4 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center mt-10 bg-gradient-to-r from-gray-400 to-purple-500 bg-clip-text text-transparent">
            Join The Team
          </h1>
          <p className="text-sm text-center bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent max-w-3xl mx-auto mt-2">
            We are always looking for new additions to help run Hack United! Please read below for requirements, benefits, and application info. Any other questions? Don’t hesitate to
            <Link href="/" className="text-blue-700 underline ml-1">contact us!</Link>
          </p>
          <Separator orientation="horizontal" className="m-4"/>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 w-full mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/4 bg-black/50 p-5 rounded-lg h-96"
          >
            <div className="flex flex-col justify-center gap-3 mb-4 text-center">
                <h2>
                    Departments
                </h2>
                {categories.map((cat) => (
                <Button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={clsx(
                    "text-sm border border-purple-600 hover:border-purple-400 transition-all cursor-pointer",
                    selectedCategory === cat
                        ? "bg-purple-600 text-white"
                        : "bg-transparent text-purple-300"
                    )}
                    variant="ghost"
                >
                    {cat}
                </Button>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-3/4 space-y-12"
          >
            <div className="bg-black/50 p-5 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                    {filteredPositions.map((position, index) => (
                    <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    >
                    <Card
                        className="rounded-3xl bg-white/5 shadow-xl backdrop-blur-lg border border-white/10 w-full h-full"
                    >
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xl text-purple-200">{position.title}</CardTitle>
                            <p className="text-sm text-purple-400 italic">{position.category}</p>
                        </CardHeader>
                        <CardContent className="text-sm text-purple-300 whitespace-pre-line">
                        {position.description.trim()}
                        </CardContent>
                    </Card>
                    </motion.div>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch mb-6">
                <Card className="bg-black/50 shadow-lg ring-1 ring-black/5 rounded-2xl flex-1 flex flex-col">
                    <CardHeader className="pb-2">
                    <CardTitle className="text-3xl text-purple-200">Benefits</CardTitle>
                    <CardDescription className="text-purple-400">
                        While our positions are unpaid, we offer meaningful perks to our volunteers.
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2 text-purple-300 flex-1">
                    <ul className="list-disc list-inside">
                        <li>Service Hours*</li>
                        <li>Custom Email & Google Workspace Access</li>
                        <li>Recognition (Resume, Recommendation Letters, Certificates, etc)</li>
                        <li>Team mentorship and support</li>
                        <li>Free Swag**</li>
                    </ul>
                    <p className="italic text-xs text-purple-500 pt-2">
                        * Hours may not qualify for all awards. Confirm with your program.
                    </p>
                    <p className="italic text-xs text-purple-500">
                        ** Swag not guaranteed for every member upon joining.
                    </p>
                    </CardContent>
                </Card>
                <Card className="bg-black/50 shadow-lg ring-1 ring-black/5 rounded-2xl flex-1 flex flex-col">
                    <CardHeader className="pb-2">
                    <CardTitle className="text-3xl text-purple-200">Apply Now</CardTitle>
                    <CardDescription className="text-purple-400">
                        Please email{" "}
                        <a href="mailto:jobs@hackunited.org" className="text-blue-400 underline">
                        jobs@hackunited.org
                        </a>{" "}
                        with the following details:
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-purple-300 flex-1">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Age</li>
                        <li>Country & State</li>
                        <li>Resume (optional)</li>
                        <li>LinkedIn Profile (optional)</li>
                        <li>What position(s) are you applying for?</li>
                        <li>Why are you interested in this position?</li>
                        <li>Relevant skills or experience</li>
                        <li>Past volunteer experience</li>
                        <li>Time commitment available</li>
                        <li>Any projects or areas you're passionate about?</li>
                    </ul>
                    </CardContent>
                </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
