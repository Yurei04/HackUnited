"use client"

import { useRef, useMemo } from "react"
import { useInView, motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"


export const team = {
    "executives": [
      { "name": "Tejas C.", "type": "Founder + CEO", "img": "#", "alt": "Logo"},
      { "name": "Pranav A.", "type": "Chief Operating Officer", "img": "#", "alt": "Logo" },
      { "name": "Kavin A.", "type": "Chief Administrative Officer", "img": "#", "alt": "Logo" },
            { "name": "Kishan P.", "type": "Head of Community", "img": "#", "alt": "Logo" },
      { "name": "Sahana P.", "type": "Head Outreach Manager", "img": "#", "alt": "Logo" },
      { "name": "Rehan R.", "type": "Head of Marketing", "img": "#", "alt": "Logo" },
      { "name": "Armaan P.", "type": "Head Blog Manager", "img": "#", "alt": "Logo" }
    ],
    "officers": [
      { "name": "Ankit B.", "type": "Web Developer", "img": "#", "alt": "Logo" },
      { "name": "Arnnav K.", "type": "Technical Team", "img": "#", "alt": "Logo" },
      { "name": "Som S.", "type": "Web Developer", "img": "#", "alt": "Logo" },
      { "name": "Henry N.", "type": "Social Media Manager", "img": "#", "alt": "Logo" },
      { "name": "Tadas V.", "type": "Community Planner", "img": "#", "alt": "Logo" },
      { "name": "Yukta P.", "type": "Outreach Manager", "img": "#", "alt": "Logo" },
      { "name": "Fiona F.", "type": "Social Media Manager", "img": "#", "alt": "Logo" },
      { "name": "Ritvik P.", "type": "Outreach Associate", "img": "#", "alt": "Logo" }
    ],
    "volunteers": [
      { "name": "Shruti G.", "type": "Marketing", "img": "#", "alt": "Logo" },
      { "name": "Josh M.", "type": "Article Writer", "img": "#", "alt": "Logo" },
      { "name": "Yash M.", "type": "Outreach Associate", "img": "#", "alt": "Logo" },
      { "name": "Dev C.", "type": "Partnership Manager", "img": "#", "alt": "Logo" },
      { "name": "Youssef E.", "type": "Technical Support", "img": "#", "alt": "Logo" },
      { "name": "Jen H.", "type": "Community Manager", "img": "#", "alt": "Logo" },
      { "name": "Joel. R", "type": "Community Manager", "img": "#", "alt": "Logo" },
      { "name": "Yosuf A.", "type": "Community Team", "img": "#", "alt": "Logo" },
      { "name": "Hadi M.", "type": "Full Stack Developer", "img": "#", "alt": "Logo" },
      { "name": "Dheeraj T", "type": "Education Team", "img": "#", "alt": "Logo" },
      { "name": "Jeffery L.", "type": "Chief Finance Officer", "img": "#", "alt": "Logo" },
      { "name": "Shaan B.", "type": "Discord Bot Developer", "img": "#", "alt": "Logo" },
      { "name": "Narain S.", "type": "Course Instructor", "img": "#", "alt": "Logo" },
      { "name": "Danish A.", "type": "Graphic Designer", "img": "#", "alt": "Logo" },
      { "name": "Sudar A.", "type": "Graphic Designer", "img": "#", "alt": "Logo" },
      { "name": "Anora D.", "type": "Course Instructor", "img": "#", "alt": "Logo" },
      { "name": "Kevin A.", "type": "Course Instructor", "img": "#", "alt": "Logo" },
      { "name": "Prince M.", "type": "Head Marketing Director", "img": "#", "alt": "Logo" },
      { "name": "Mylthosa", "type": "Talent Acquisition", "img": "#", "alt": "Logo" },
      { "name": "Harish A.", "type": "Finance Manager", "img": "#", "alt": "Logo" },
      { "name": "Aidan D.", "type": "Talent Acquisition", "img": "#", "alt": "Logo" },
      { "name": "Ru Xue J.", "type": "Senior Content Writer", "img": "#", "alt": "Logo" },
      { "name": "Abhinav S.", "type": "Finance Manager", "img": "#", "alt": "Logo" },
      { "name": "Oluwatimilehin A.", "type": "Partnership Manager", "img": "#", "alt": "Logo" },
      { "name": "Alaap J.", "type": "Project Coordinator", "img": "#", "alt": "Logo" },
      { "name": "Ishan K.", "type": "Community Manager", "img": "#", "alt": "Logo" },
      { "name": "Shrey V.", "type": "Event Operations", "img": "#", "alt": "Logo" },
      { "name": "Nicole J.", "type": "Technical Associate", "img": "#", "alt": "Logo" },
      { "name": "Ameer.", "type": "Head of Engineering", "img": "#", "alt": "Logo" },
      { "name": "Mason Z.", "type": "Technical Support", "img": "#", "alt": "Logo" },
      { "name": "May T.", "type": "Event Operations", "img": "#", "alt": "Logo" },
      { "name": "Quynh T.", "type": "Event Operations", "img": "#", "alt": "Logo" },
      { "name": "Omkar P.", "type": "Community Planner", "img": "#", "alt": "Logo" },
      { "name": "Shrey S.", "type": "Finance Manager", "img": "#", "alt": "Logo" },
      { "name": "Easwar G.", "type": "Partnership Manager", "img": "#", "alt": "Logo" },
      { "name": "Adi K.", "type": "Outreach Manager", "img": "#", "alt": "Logo" },
      { "name": "Aadi G.", "type": "Social Media Manager", "img": "#", "alt": "Logo" },
      { "name": "Noah A.", "type": "Article Writer", "img": "#", "alt": "Logo" },
      { "name": "Isaac W.", "type": "Web Developer", "img": "#", "alt": "Logo" },
      { "name": "Wahib B.", "type": "Web Developer", "img": "#", "alt": "Logo" },
      { "name": "Niko P.", "type": "Community Team", "img": "#", "alt": "Logo" },
      { "name": "Dino B.", "type": "Web Developer", "img": "#", "alt": "Logo" },
      { "name": "Rushil C.", "type": "Social Media Manager", "img": "#", "alt": "Logo" },
      { "name": "Muhammad D.", "type": "Technical Team", "img": "#", "alt": "Logo" },
      { "name": "Murari A.", "type": "Social Media Manager", "img": "#", "alt": "Logo" },
      { "name": "Akishai S.", "type": "Outreach Associate", "img": "#", "alt": "Logo" },
      { "name": "Indrajeet S.", "type": "Outreach Associate", "img": "#", "alt": "Logo" },
      { "name": "Alex P.", "type": "Advisor", "img": "#", "alt": "Logo" },
      { "name": "Mikul R.", "type": "Article Writer", "img": "#", "alt": "Logo" },
      { "name": "Sohil C.", "type": "Outreach Associate", "img": "#", "alt": "Logo" },
      { "name": "Arnav S.", "type": "Outreach Manager", "img": "#", "alt": "Logo" },
      { "name": "Taha Y.", "type": "Graphic Designer", "img": "#", "alt": "Logo" }
    ]
  }

function AnimatedCard({ children, direction = "left", justify = "start" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.55, 0.55, 1],
      },
    },
  }

  return (
    <div className={`flex justify-${justify}`} ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.05 }}
        className={` w-full`}
      >
        {children}
      </motion.div>
    </div>
  )
}

function TeamSection({ title, description, members, cardsPerRow = 4, variant }) {
  const rows = useMemo(() => {
    return Array.from({ length: Math.ceil(members.length / cardsPerRow) }, (_, i) =>
      members.slice(i * cardsPerRow, i * cardsPerRow + cardsPerRow)
    );
  }, [members, cardsPerRow]);

  return (
    <div className="space-y-6 flex flex-col items-center justify-center mb-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-purple-300">{title}</h2>
        {description && <p className="text-purple-400 max-w-2xl text-sm">{description}</p>}
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        {rows.map((row, rowIdx) => (
          <AnimatedCard
            key={rowIdx}
            direction={rowIdx % 2 === 0 ? "left" : "right"}
            justify={rowIdx % 2 === 0 ? "start" : "end"}
          >
            <div
              className={`grid gap-10 ${
                cardsPerRow === 3
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
              }`}
            >
              {row.map((member, index) => (
                <Card
                  key={index}
                  className={`bg-black/50 text-center border border-purple-800 shadow-md rounded-xl ${
                    variant === "compact" ? "scale-90 p-2" : ""
                  }`}
                >
                  <CardHeader className="flex flex-col items-center">
                    <img
                      src={member.img}
                      alt={member.alt}
                      className={`object-cover rounded-full mb-2 bg-black/50 ${
                        variant === "compact" ? "w-16 h-16" : "w-20 h-20"
                      }`}
                    />
                    <CardTitle
                      className={`text-purple-100 ${
                        variant === "compact" ? "text-base" : "text-xl"
                      }`}
                    >
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`text-purple-400 ${
                        variant === "compact" ? "text-sm" : "text-base"
                      }`}
                    >
                      {member.type}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}

export default function Teams() {
  return (
    <div className="w-full min-h-screen p-10 space-y-16 mt-26 items-center justify-center overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="p-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
              Meet the Team
            </span>
          </h1>
          <p className="text-center text-purple-200 max-w-2xl mx-auto mb-10">
            Hack United is powered by passionate students and mentors from around the globe. Get to know the leaders and volunteers driving our mission forward.
          </p>
        </div>
        <Separator orientation="horizontal" className="m-4"/>
        <TeamSection
          title="Executives"
          description="Our executive team oversees Hack United’s vision, growth, and operations."
          members={team.executives}
          cardsPerRow={4}
        />

        <TeamSection
          title="Officers"
          description="Support leads and execute core tasks within their departments."
          members={team.officers}
          cardsPerRow={4}
        />

        <TeamSection
          title="Previous Volunteers"
          description="Dedicated contributors that make Hack United’s mission possible."
          members={team.volunteers}
          cardsPerRow={4}
          variant="compact"
        />
      </motion.div>
    </div>
  )
}
