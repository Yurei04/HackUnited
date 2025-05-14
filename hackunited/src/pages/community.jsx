"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "motion"
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
  ],
}

export default function CommunityStats() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll(".char")
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
    <div className="flex flex-wrap w-full h-3/6 justify-center gap-6 p-6 " ref={containerRef}>
      {chartData.dataset.map((data) => {
        const numString = data.value.toLocaleString() + "+"
        return (
          <Card
            key={data.id}
            className="w-64 bg-black/60 backdrop-blur-lg border border-purple-800 shadow-lg hover:border-purple-500 rounded-3xl justify-center text-center"
          >
            <CardHeader className="items-center">
              <CardTitle className="text-lg text-purple-300">{data.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center h-24 text-4xl font-bold">
              {numString.split("").map((char, index) => (
                <span key={index} className="char inline-block">
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
