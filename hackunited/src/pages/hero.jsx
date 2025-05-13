"use client"

import React from "react";
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      DialogFooter,
      DialogClose
} from "@/components/ui/dialog"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const data = {
    dataCard: [
        {
            id: 1,
            title: "Hack United III",
            des: "Et fugiat id amet deserunt eiusmod excepteur ea aliquip veniam exercitation id ea nisi do.",
            style: "w-[400px] h-auto -rotate-10 rounded-4xl isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5"
        },
        {
            id: 2,
            title: "Hack United V",
            des: "Et fugiat id amet deserunt eiusmod excepteur ea aliquip veniam exercitation id ea nisi do.",
            style: "w-[400px] h-auto rounded-4xl isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5"

        },
        {
            id: 3,
            title: "Hack United IV",
            des: "Et fugiat id amet deserunt eiusmod excepteur ea aliquip veniam exercitation id ea nisi do.",
            style: "w-[400px] h-auto rotate-10 rounded-4xl isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5"
        },
    ]
}

export default function Hero () {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen -mt-15 lg:pt-0 sm:pt-18">
            <div className="flex flex-col text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-5"
                >
                    <div className="flex justify-center items-center">
                        <Card className="border border-purple-500 text-purple-400 bg-transparent rounded-4xl p-0">
                            <CardContent>
                                Something Something
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-8xlr flex flex-row gap-5 items-center justify-center">
                            <span className="text-transparent bg-clip-text text-7xl bg-gradient-to-r from-gray-400 to-purple-500">
                                Hack United {" "} 
                            </span>
                            <Avatar>
                                <AvatarImage src="#" alt="@UH" />
                                <AvatarFallback>UH</AvatarFallback>
                            </Avatar>
                        </h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-8xlr">
                            <span className="text-transparent bg-clip-text text-6xl bg-gradient-to-r from-gray-400 to-purple-500">
                               non-profit organization {" "}
                            </span>
                        </h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-8xlr">
                            <span className="text-transparent bg-clip-text text-2xl bg-gradient-to-r from-gray-200 to-purple-300">
                                Ut nulla reprehenderit voluptate laborum tempor ex ad esse nulla.
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center mb-auto sm:mb-10">
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input type="email" placeholder="Email" />
                            <Button type="submit">Subscribe</Button>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-center flex-wrap gap-6 p-4 max-w-screen-xl mx-auto">
                        {data.dataCard.map((card) => (
                            <Card key={card.id} className={card.style}>
                                <CardHeader>
                                    <Avatar>
                                        <AvatarImage src="#" alt="@UH" />
                                        <AvatarFallback>UH</AvatarFallback>
                                    </Avatar>
                                    <CardTitle>{card.title}</CardTitle>
                                    <CardDescription>{card.des}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-row gap-2">
                                    <Button variant="outline">
                                        <Link href="#">Lets Go</Link>
                                    </Button>
                                    <Dialog>
                                        <DialogTrigger>Details</DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>{card.diaTitle}</DialogTitle>
                                                <DialogDescription>{card.diaDes}</DialogDescription>
                                            </DialogHeader>
                                                <DialogFooter className="sm:justify-start">
                                                    <DialogClose asChild>
                                                        <Button type="button">Close</Button>
                                                    </DialogClose>
                                                </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        ))}
                        </div>
                </motion.div>
            </div>
        </div>
    )
}