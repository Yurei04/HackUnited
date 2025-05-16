"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

export default function DonateSection() {
    return (
        <div className="flex flex-col w-full min-h-screen mt-15">
        <div className="flex flex-col items-center justify-center gap-10 px-4 py-12">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >
            <h1 className="text-center text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500 mt-4">
                Donate
            </h1>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.9,
                type: "spring",
                bounce: 0.2,
                delay: 0.1,
            }}
            viewport={{ once: true, amount: 0.6 }}
            >
            <Card className="border hover:border-purple-500 rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5 overflow-hidden w-[24rem] h-[24rem]">
                <CardHeader className="flex items-center justify-center pt-6">
                <Avatar className="w-24 h-24">
                    <AvatarImage src="/images/HackUnited2.png" alt="Hack United Logo" />
                    <AvatarFallback>UH</AvatarFallback>
                </Avatar>
                </CardHeader>
                <CardContent className="flex items-center justify-center text-center px-4">
                <p className="text-muted-foreground text-sm">
                    Your support helps us keep Hack United running. Whether it's server costs, platform improvements, or community events, every contribution makes a real impact.
                </p>
                </CardContent>
            </Card>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.9,
                type: "spring",
                bounce: 0.2,
                delay: 0.1,
            }}
            viewport={{ once: true, amount: 0.4 }}
            >
            <div className="max-w-2xl mx-auto px-4">
                <Card className="border hover:border-purple-500 rounded-xl bg-black/40 shadow-lg ring-1 ring-black/5">
                <CardContent className="space-y-6 py-6 px-4">
                    <p className="text-base text-white">
                    Donations are completely optional and deeply appreciated. Every contribution helps us continue our mission with Hack United.
                    </p>
                    <p className="text-muted-foreground text-sm italic">
                    Are you a company or brand?{" "}
                    <Dialog>
                        <DialogTrigger asChild>
                        <span className="text-blue-500 underline cursor-pointer">
                            View sponsor info
                        </span>
                        </DialogTrigger>
                        <DialogContent className="text-sm text-left max-w-4xl  bg-black/90 shadow-lg ring-1 ring-black/5 m-5">
                        <DialogTitle className="sr-only">Sponsor Information</DialogTitle>
                        <h2 className="text-lg font-bold text-white">Sponsor</h2>
                        <p className="text-white">
                            Interested in sponsoring us? If you are a company interested in sponsoring Hack United, or a Hack United event, send us an e-mail at{" "}
                            <a href="mailto:humans@hackunited.org" className="text-blue-400 underline">humans@hackunited.org</a>{" "}
                            and we will connect you with one of our sponsorship team members.
                        </p>
                        <p className="text-white">
                            View our Sponsorship Prospectus for information about tiers!
                        </p>

                        <div>
                            <h3 className="text-purple-300 font-semibold mt-4">Benefits of Sponsoring Hack United</h3>
                            <ul className="list-disc list-inside text-white space-y-1">
                            <li>Positive brand exposure</li>
                            <li>Community involvement</li>
                            <li>Access to new customers or clients</li>
                            <li>Logo displayed on Website, Social Media, and Merchandise*</li>
                            </ul>
                        </div>

                        <div className="text-sm">
                            <h3 className="text-purple-300 font-semibold mt-4">Sponsor Our Hackathons</h3>
                            <ul className="list-disc list-inside text-white space-y-1">
                            <li>Positive brand exposure</li>
                            <li>Community involvement</li>
                            <li>Access to new customers or clients</li>
                            <li>Integrate your software/hardware as a theme</li>
                            <li>Organize a workshop about your tool</li>
                            <li>Sponsor either monetarily or provide prizes!</li>
                            <li>Logo displayed on Website, Social Media, and Merchandise*</li>
                            </ul>
                            <p className="text-muted-foreground text-xs mt-2 italic">
                            *Only select events offer merchandise production
                            </p>
                        </div>

                        <DialogClose asChild>
                            <Button variant="outline" className="mt-4">
                                Back
                            </Button>
                        </DialogClose>
                        </DialogContent>
                    </Dialog>
                    </p>
                </CardContent>
                </Card>
            </div>
            </motion.div>

            <Link href="/" passHref>
                <Button as="a" variant="destructive" className="m-5 p-4 lg:w-2xl sm:2-base cursor-pointer">
                    Back To Home
                </Button>
            </Link>
        </div>
        </div>
  );
}
