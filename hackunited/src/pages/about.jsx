"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About () {
    return (
        <div className="w-full h-screen p-1 flex lg:flex-row sm:flex-col items-center justify-center sm:mt-25">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.2,
                    delay: 0.1,
                }}
                viewport={{ once: true, amount: 0.6 }}
                className="flex lg:flex-row sm:flex-col gap-10 items-center justify-center"
            >
                <div className="flex flex-col gap-5">
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-8xlr flex flex-row gap-5 items-center justify-center">
                            <span className="text-transparent bg-clip-text text-6xl bg-gradient-to-r from-gray-400 to-purple-500">
                                Who Are We? 
                            </span>
                        </h1>
                    </div>
                    <div>
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-[#181818] overflow-hidden">
                        <Image
                            src="/images/workableB.png"
                            alt="HackUnited Logo"
                            layout="fill"
                            objectFit="cover"
                        />
                        </div>
                    </div>
                </div>
                <Card className="text-justify p-5 isolate aspect-video lg:w-[60%] sm:w-[100%] rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5">
                    <CardContent>
                        <h1 className="text-xs sm:text-5xl lg:text-8xlr">
                            <span id="letters" className="text-transparent bg-clip-text text-xl bg-gradient-to-r from-purple-300 to-purple-200">
                                Hack United is a 501(c)(3) non-profit organization founded by teenagers with a passion for programming and technology. Our mission is to inspire and educate the next generation of innovators through hackathons and workshops. We address a problem not as commonly talked about, aiming to equip high school and college students with the essential soft skills needed to thrive in their chosen career paths. This is done through hands on application such as our free to enter hackathons. Through our initiatives, we ultimately aim to help students prosper in the realm of technology.
                            </span>
                        </h1>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}