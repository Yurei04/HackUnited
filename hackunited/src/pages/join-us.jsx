"use client"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"

export default function JoinUs () {
    return (
        <div className="flex flex-col w-full h-screen">
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
                className="w-full"
            >
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-8xlr flex flex-row gap-5 items-center justify-center">
                        <span className="text-transparent bg-clip-text text-5xl bg-gradient-to-r from-gray-400 to-purple-500">
                            Join Our Community 
                        </span>
                    </h1>
                </div>
                <div className="overflow-x-none">
                <Card className="rounded-4xl hover:border-purple-500 bg-black/60 backdrop-blur-lg border border-purple-800 shadow-lg sm:m-5">
                    <CardContent className="w-full rounded-3xl">
                         <iframe
                        src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark"
                        width="350"
                        height="500"
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    />
                    </CardContent>
                </Card>
                </div>
            </div>
            </motion.div>
        </div>
    )
}