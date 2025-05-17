"use client"

import { useEffect, useRef } from "react"
import { animate, stagger, inView } from "motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const chartData = {
  dataset: [
    {
      id: 1,
      title: "Social Media Followers",
      value: 2500,
    },
    {
      id: 2,
      title: "Community Members",
      value: 1500,
    },
    {
      id: 3,
      title: "Individuals Impacted",
      value: 5000,
    },
      {
      id: 4,
      title: "Workshops Conducted",
      value: 15,
    },
  ],
}

export default function CommunityStats() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(".stat-card")
    const chars = containerRef.current.querySelectorAll(".char")

    inView(cards, () => {
      animate(
        cards,
        { opacity: [0, 1], y: [40, 0] },
        {
          delay: stagger(0.2),
          duration: 0.8,
          easing: "ease-out",
        }
      )
    })

    animate(
      chars,
      { y: [-10, 10] },
      {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        duration: 2,
        delay: stagger(0.1, {
          startDelay: -0.1 * chars.length,
        }),
      }
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap w-full justify-center gap-6 p-6"
    >
      {chartData.dataset.map((data) => {
        const numString = data.value.toLocaleString() + "+"
        return (
          <Card
            key={data.id}
            className="stat-card w-64 opacity-0 transform bg-black/60 backdrop-blur-lg rounded-3xl text-center"
          >
            <CardHeader className="items-center">
              <CardTitle className="text-lg text-purple-300">
                {data.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center h-24 text-4xl font-bold">
              {numString.split("").map((char, index) => (
                <span
                  key={index}
                  className="char inline-block text-transparent bg-clip-text bg-[repeating-linear-gradient(-45deg,_#c084fc_0_4px,_#7c3aed_4px_8px)]"
                >
                  {char}
                </span>
              ))}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
