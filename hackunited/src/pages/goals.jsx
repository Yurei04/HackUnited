"use client"
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { AppWindow, CodeXml, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Goals () {
    return (
        <div className="flex flex-col w-full min-h-screen mt-20">
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
            >
                    <h1 className="text-4xl sm:text-5xl lg:text-8xl flex flex-row gap-5 items-center justify-center">
                        <span className="text-transparent bg-clip-text text-6xl bg-gradient-to-r from-gray-400 to-purple-500">
                        Goals
                        </span>
                    </h1>
            <div className="flex flex-col w-full gap-10 p-25"> 
                
                <div className="flex justify-start">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.5 }}
                >
                    <Card className=" -rotate-4 max-w-xl isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5 border hover:border-purple-500">
                        <CardContent className="p-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-8xl flex flex-row gap-5">
                            <CodeXml />
                            <span className="text-transparent bg-clip-text text-4xl bg-gradient-to-r from-gray-400 to-purple-500">
                            Accelerating Soft Skills
                            </span>
                        </h1>
                        <Separator orientation="horizontal" className="mx-2 data-[orientation=vertical]:h-4 bg-purple-700 m-2" />
                        <p className="text-transparent text-justify bg-clip-text text-base bg-gradient-to-r from-purple-300 to-purple-200">
                            We Teach More Than Just Mechanic Coding Skills:
                            As the world rapidly evolves, we envision an inclusive platform where everyone can learn about the exciting advancements in the tech field and the knowledge needed to continue their programming journey.                        
                        </p>

                        </CardContent>
                    </Card>
                </motion.div>
                </div>

                <div className="flex justify-end">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.5 }}
                >
                    <Card className=" rotate-5 max-w-xl isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5 border hover:border-purple-500">
                        <CardContent className="p-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-8xl flex flex-row gap-5">
                            <AppWindow />
                            <span className="text-transparent bg-clip-text text-4xl bg-gradient-to-r from-gray-400 to-purple-500">
                            Practical Applications
                            </span>
                        </h1>
                        <Separator orientation="horizontal" className="mx-2 data-[orientation=vertical]:h-4 bg-purple-700 m-2" />
                        <p className="text-transparent text-justify bg-clip-text text-base bg-gradient-to-r from-purple-300 to-purple-200">
                            We emphasize practical applications of programming and technology to prepare community members for the rapidly changing future. Our hackathons help exemplify our goals as we consistently use real-world problems to develop themes.
                        </p>

                        </CardContent>
                    </Card>
                </motion.div>
                </div>

                <div className="flex justify-start">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.5 }}
                >
                    <Card className="-rotate-6 max-w-xl isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5 border hover:border-purple-500">
                        <CardContent className="p-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-8xl flex flex-row gap-5">
                            <Users/>
                            <span className="text-transparent bg-clip-text text-4xl bg-gradient-to-r from-gray-400 to-purple-500">
                            Connecting Innovators
                            </span>
                        </h1>
                        <Separator orientation="horizontal" className="mx-2 data-[orientation=vertical]:h-4 bg-purple-700 m-2" />
                        <p className="text-transparent text-justify bg-clip-text text-base bg-gradient-to-r from-purple-300 to-purple-200">
                            Our community provides a platform for innovators to learn, grow, and support each other. We connect like-minded individuals to overcome the challenges of acquiring new skills. Join us to thrive in a collaborative environment.
                        </p>

                        </CardContent>
                    </Card>
                </motion.div>
                </div>

            </div>
            </motion.div>
        </div>

    )
}