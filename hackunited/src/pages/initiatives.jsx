"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { AppWindow, CodeXml, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const initiatives = [
  {
    title: "Education",
    icon: <CodeXml className="w-6 h-6 text-purple-400" />,
    items: [
      "- Online Workshops hosted by startup founders, big tech engineers, etc.",
      "- Weekly Coding Challenges",
      <>
        <Link className="text-blue-400 underline" href="#">
          - Blog
        </Link>{" "}
        with weekly posts talking about recent tech news.
      </>,
    ],
  },
  {
    title: "Hackathons",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    items: [
      "- Heavy Emphasis on Soft Skills and Presenting",
      "- Developing Collaboration",
      "- Accelerating Career Readiness",
    ],
  },
  {
    title: "Connecting Innovators",
    icon: <AppWindow className="w-6 h-6 text-purple-400" />,
    items: [
      "- Discord Community With 1,500+ like-minded Innovators of All Skill Levels",
      "- Networking Opportunities with Industry Professionals",
      "- Programs to help fund or publish projects from our community",
    ],
  },
];

function InitiativeCard({ title, icon, items }) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Card className="max-w-xs isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5">
          <CardContent className="p-10">
            <h2 className="text-3xl flex items-center gap-4 mb-4">
              {icon}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
                {title}
              </span>
            </h2>
            <Separator orientation="horizontal" className="bg-purple-700 my-4 w-[50%]" />
            <ul className="space-y-2 text-transparent bg-clip-text text-base bg-gradient-to-r from-purple-300 to-purple-200 text-justify">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    );
}

export default function Initiatives() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.2,
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-7xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-10 text-center">
          <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
            Our Initiatives
          </span>
        </h1>

        <div className="flex flex-wrap gap-6 justify-center">
          {initiatives.map((initiative, index) => (
            <InitiativeCard key={index} {...initiative} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
