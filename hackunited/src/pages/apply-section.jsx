"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";


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
    description: `Frequently post on platforms like X/Twitter, Instagram, and Threads.`,
    requirements: [
      "Familiarity with major social media platforms",
      "Strong writing and communication skills",
      "Ability to coordinate with design/content teams"
    ],
    responsibilities: [
      "Create and schedule posts consistently",
      "Collaborate with graphic designers to align visuals",
      "Monitor and grow follower base"
    ],
    benefits: [
      "Boost your digital marketing portfolio",
      "Work with a collaborative creative team",
      "Real-world brand exposure experience"
    ]
  },
  {
    category: "Marketing",
    title: "Short Form Content Creator",
    icon: Video,
    description: `Create engaging videos for Instagram Reels, TikTok, and YouTube Shorts.`,
    requirements: [
      "Basic video editing skills",
      "Awareness of short-form content trends",
      "Creative storytelling ability"
    ],
    responsibilities: [
      "Produce trend-driven videos regularly",
      "Edit content to fit platform guidelines",
      "Collaborate with marketing and design team"
    ],
    benefits: [
      "Build your video portfolio",
      "Get credit on public content",
      "Experiment with creative freedom"
    ]
  },
  {
    category: "Marketing",
    title: "Discord Promoter",
    icon: Users,
    description: `Promote Hack United server using provided methods.`,
    requirements: [
      "Strong communication and outreach skills",
      "Knowledge of Discord servers and communities",
      "Comfortable with promotion and networking"
    ],
    responsibilities: [
      "Join and engage with niche communities",
      "Promote Hack United in allowed channels",
      "Form partnerships with other STEM servers"
    ],
    benefits: [
      "Hands-on digital marketing experience",
      "Build networking and promotion skills",
      "Direct impact on community growth"
    ]
  },
  {
    category: "Human Resources",
    title: "Talent Acquisition Manager",
    icon: UserPlus,
    description: `Develop recruitment strategies and conduct interviews.`,
    requirements: [
      "Organizational and people skills",
      "Experience or interest in HR practices",
      "Attention to detail with applications"
    ],
    responsibilities: [
      "Source and review applicants",
      "Schedule and conduct interviews",
      "Refine recruitment strategies"
    ],
    benefits: [
      "Experience in a leadership role",
      "HR and people operations exposure",
      "Develop professional communication skills"
    ]
  },
  {
    category: "Human Resources",
    title: "Outreach Manager",
    icon: Mail,
    description: `Contact entrepreneurs, sponsors, and media to form partnerships.`,
    requirements: [
      "Excellent email writing and communication skills",
      "Ability to identify and pitch to potential partners",
      "Professionalism and persistence"
    ],
    responsibilities: [
      "Draft and send outreach communications",
      "Negotiate and form collaborations",
      "Report outcomes and opportunities to the team"
    ],
    benefits: [
      "Real-world fundraising and outreach experience",
      "Expand your professional network",
      "Boost your communication and sales skills"
    ]
  },
  {
    category: "Community",
    title: "Community Team Member",
    icon: Users,
    description: `Boost engagement and maintain inclusive environments.`,
    requirements: [
      "Friendly and welcoming attitude",
      "Moderation experience is a plus",
      "Active presence in community platforms"
    ],
    responsibilities: [
      "Moderate discussions and events",
      "Run challenges and polls",
      "Keep the community active and inclusive"
    ],
    benefits: [
      "Be a core part of Hack United culture",
      "Strengthen moderation and event skills",
      "Help shape the community experience"
    ]
  },
  {
    category: "Community",
    title: "Article Writer",
    icon: FileText,
    description: `Write articles for https://blog.hackunited.org.`,
    requirements: [
      "Strong writing and research skills",
      "Ability to simplify complex topics",
      "Familiarity with teen tech trends"
    ],
    responsibilities: [
      "Publish 1–2 page blog articles regularly",
      "Research and source relevant topics",
      "Edit for readability and engagement"
    ],
    benefits: [
      "Get published on a public blog",
      "Showcase your writing to a broad audience",
      "Use AI tools with editorial freedom"
    ]
  },
  {
    category: "Technology",
    title: "Web Developer",
    icon: Globe,
    description: `Maintain Hack United websites and add interactive features.`,
    requirements: [
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with React and Tailwind is a bonus",
      "Basic understanding of backend tools (Node.js, Firebase)"
    ],
    responsibilities: [
      "Update and maintain existing sites",
      "Implement new features as needed",
      "Collaborate with the tech and design teams"
    ],
    benefits: [
      "Hands-on experience with real-world projects",
      "Opportunity to innovate and design",
      "Build a strong GitHub portfolio"
    ]
  },
  {
    category: "Technology",
    title: "Discord Bot Developer",
    icon: Bot,
    description: `Develop and optimize bots using discord.js or discord.py.`,
    requirements: [
      "Familiarity with Discord API",
      "Experience in JavaScript or Python",
      "Debugging and deployment skills"
    ],
    responsibilities: [
      "Create and enhance bot functionality",
      "Ensure uptime and usability",
      "Add features based on team input"
    ],
    benefits: [
      "Build real-world bots used by a community",
      "Work on innovative bot features",
      "Open-source contributions and visibility"
    ]
  },
  {
    category: "Technology",
    title: "Graphics Designer",
    icon: Paintbrush,
    description: `Create designs for events, merch, and social media.`,
    requirements: [
      "Proficiency with a design tool (Photoshop, Illustrator, etc.)",
      "Creativity and visual storytelling skills",
      "Figma knowledge is a bonus"
    ],
    responsibilities: [
      "Design visual assets for various campaigns",
      "Work with marketing and web teams",
      "Ensure branding consistency"
    ],
    benefits: [
      "Build a strong visual portfolio",
      "See your designs used in public",
      "Creative freedom and team support"
    ]
  },
  {
    category: "Technology",
    title: "Technical Team",
    icon: Code2,
    description: `Offer coding help, build challenges, and guide peers.`,
    requirements: [
      "Solid foundation in Python, Java, or C++",
      "Problem-solving and teaching skills",
      "Interest in community-driven tech"
    ],
    responsibilities: [
      "Assist users with programming questions",
      "Develop fun and engaging coding challenges",
      "Guide others in using AI coding tools"
    ],
    benefits: [
      "Improve leadership and mentorship skills",
      "Sharpen your coding fundamentals",
      "Make a positive impact on the coding community"
    ]
  }
];


const categories = ["All", ...Array.from(new Set(hackUnitedPositions.map((p) => p.category)))];


export default function ApplySection() {

const [selectedCategory, setSelectedCategory] = useState("All");

const filteredPositions =
    selectedCategory === "All"
    ? hackUnitedPositions
    : hackUnitedPositions.filter((p) => p.category === selectedCategory);
        
  return (
    <div className="flex flex-col w-full min-h-screen mt-15 mb-4 py-4 lg:px-20">
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
                    <Card className="rounded-3xl bg-white/5 shadow-xl backdrop-blur-lg border border-white/10 w-full h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl text-purple-200">{position.title}</CardTitle>
                        <p className="text-sm text-purple-400 italic">{position.category}</p>
                      </CardHeader>
                      <CardContent className="text-sm text-purple-300 whitespace-pre-line">
                        {position.description.trim()}
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="text-purple-400 hover:text-purple-200 text-sm cursor-pointer">
                              Learn More
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-lg bg-black border border-white/10">
                            <DialogHeader>
                              <DialogTitle className="text-purple-100 text-xl">{position.title}</DialogTitle>
                              <DialogDescription className="text-purple-400">{position.category}</DialogDescription>
                            </DialogHeader>
                            <div className="text-sm text-purple-200 space-y-3">
                              <div>
                                <p className="font-semibold text-purple-400">Description:</p>
                                <p>{position.description.trim()}</p>
                              </div>
                              <div>
                                <p className="font-semibold text-purple-400">Requirements:</p>
                                <ul className="list-disc list-inside text-purple-300">
                                  {position.requirements?.map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold text-purple-400">Responsibilities:</p>
                                <ul className="list-disc list-inside text-purple-300">
                                  {position.responsibilities?.map((res, idx) => (
                                    <li key={idx}>{res}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold text-purple-400">Benefits:</p>
                                <ul className="list-disc list-inside text-purple-300">
                                  {position.benefits?.map((ben, idx) => (
                                    <li key={idx}>{ben}</li>
                                  ))}
                                </ul>
                              </div>
                              <p className="italic text-purple-400 text-xs pt-2">
                                Note: This is a volunteer position and may require time commitment.
                              </p>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="text-purple-400 hover:text-purple-200 text-sm cursor-pointer">
                                  Apply Now
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-lg bg-black border border-white/10">
                                <DialogHeader>
                                  <DialogTitle className="text-purple-100 text-xl">Apply Now! Contact Us</DialogTitle>
                                  <DialogDescription className="text-purple-400"> 
                                        Please email{" "}
                                        <a href="mailto:jobs@hackunited.org" className="text-blue-400 underline">
                                        jobs@hackunited.org
                                        </a>{" "}
                                        with the following details:
                                  </DialogDescription>
                                </DialogHeader>
                                  <Card className="bg-black/50 shadow-lg ring-1 ring-black/5 rounded-2xl flex-1 flex flex-col">
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
                              </DialogContent>
                            </Dialog>
                          </DialogContent>
                          <DialogFooter> 
                          </DialogFooter>
                        </Dialog>
                      </CardFooter>
                    </Card>
                    </motion.div>
                    ))}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
