"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Heart, Star, Building2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function DonateSection() {
  return (
    <div className="flex flex-col w-full min-h-screen mt-15 py-20 items-center justify-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-8 text-center max-w-3xl mx-auto"
        >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
                    Donate
                </span>
            </h1>
            <p className="text-purple-200 text-base">
            Your donations help us fund events, provide resources, and expand access to STEM education for youth around the world. Every contribution counts
            </p>
            <Separator orientation="horizontal" className=""/>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-8 text-center mt-4"
        >
            <Card className="bg-black/40 border hover:border-purple-500 shadow-lg ring-1 ring-black/5 rounded-xl w-full max-w-xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-purple-200 text-xl flex items-center gap-2">
                    <Building2 className="text-purple-400" /> Are You a Company or a Brand?
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-purple-300 text-sm">
                    We welcome partnerships with companies that share our values of empowering youth in tech. Whether you want to sponsor a hackathon, run a workshop, or support our mission — we’d love to collaborate.
                    </p>

                    <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-purple-600 hover:bg-purple-500 text-white">
                        Read About Sponsorship Opportunities
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="text-sm text-left max-w-4xl bg-black/90 shadow-lg ring-1 ring-black/5 m-5">
                        <DialogTitle className="sr-only">Sponsorship Info</DialogTitle>
                        <h2 className="text-lg font-bold text-white mb-2">Sponsor Hack United</h2>
                        <p className="text-purple-200 mb-4">
                        Sponsoring Hack United gives you the chance to uplift future innovators while showcasing your brand to a global tech-focused audience.
                        </p>

                        <ul className="list-disc list-inside text-white space-y-1">
                        <li>Get featured on our website, social media, and merchandise*</li>
                        <li>Run branded workshops or challenges</li>
                        <li>Reach thousands of motivated students globally</li>
                        <li>Support free access to education & resources</li>
                        </ul>
                        <p className="text-muted-foreground text-xs italic mt-2">
                        *Merchandise placement available at select events
                        </p>

                        <DialogClose asChild>
                        <Button variant="outline" className="mt-4">
                            Close
                        </Button>
                        </DialogClose>
                    </DialogContent>
                    </Dialog>
                </CardContent>
                </Card>

        </motion.div>

        <div className="w-full bg-black/50 py-8 mt-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                viewport={{ once: true, amount: 0.6 }}
                className="w-full p-4"
            >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-4xl mb-6 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
                            Support Hack United
                        </span>
                    </h1>
                    <p className="text-purple-200 text-sm">
                        We’re a 501(c)(3) nonprofit empowering youth in tech and innovation. Your donation helps us host free events, maintain our platforms, and expand access to educational opportunities.
                    </p>    
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                viewport={{ once: true, amount: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto" 
            >
                <Card className="bg-black/40 shadow-lg ring-1 ring-black/5 rounded-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-200">
                    <Heart className="text-purple-400" /> One-Time Donation
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                    Make a one-time gift to support Hack United. Every dollar helps us reach more students.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className="mt-2 bg-purple-600 hover:bg-purple-500 text-white w-full">Donate Now</Button>
                </CardContent>
                </Card>


                <Card className="bg-black/40 shadow-lg ring-1 ring-black/5 rounded-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-200">
                    <Star className="text-purple-400" /> Monthly Support
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                    Become a recurring donor and help sustain our programs year-round.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className="mt-2 bg-purple-600 hover:bg-purple-500 text-white w-full">Join Monthly</Button>
                </CardContent>
                </Card>

                <Card className="bg-black/40 shadow-lg ring-1 ring-black/5 rounded-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-200">
                    <Building2 className="text-purple-400" /> Become a Sponsor
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                    Companies and organizations can partner with us through sponsorship.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                        View Sponsor Info
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="text-sm text-left max-w-4xl bg-black/90 shadow-lg ring-1 ring-black/5 m-5">
                        <DialogTitle className="sr-only">Sponsor Information</DialogTitle>
                        <h2 className="text-lg font-bold text-white">Sponsor Hack United</h2>
                        <p className="text-white mt-2">
                        Interested in sponsoring us? Email{" "}
                        <a href="mailto:humans@hackunited.org" className="text-blue-400 underline">
                            humans@hackunited.org
                        </a>{" "}
                        and we’ll connect you with our sponsorship team.
                        </p>

                        <h3 className="text-purple-300 font-semibold mt-4">Why Sponsor Us?</h3>
                        <ul className="list-disc list-inside text-white space-y-1">
                        <li>Positive brand exposure to a growing tech community</li>
                        <li>Community involvement and social impact</li>
                        <li>Integrate your tools in hackathons/workshops</li>
                        <li>Logo on our website, social media, and event swag*</li>
                        </ul>
                        <p className="text-muted-foreground text-xs italic mt-2">
                        *Only select events offer merchandise placement
                        </p>

                        <DialogClose asChild>
                        <Button variant="outline" className="mt-4">
                            Back
                        </Button>
                        </DialogClose>
                    </DialogContent>
                    </Dialog>
                </CardContent>
                </Card>
            </motion.div>
        </div>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-24 space-y-8 px-4"
        >
        <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
            Why Your Support Matters
            </h2>
            <p className="text-purple-200 mt-2 max-w-3xl mx-auto text-sm sm:text-base">
            Your donation directly powers our mission to empower youth through technology and education. We ensure every dollar counts.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-black/40 shadow-lg ring-1 ring-black/5 rounded-xl">
            <CardHeader>
                <CardTitle className="text-purple-200 text-xl">Where Does Your Donation Go?</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-purple-300 text-sm space-y-2">
                <li>Platform hosting and technical infrastructure</li>
                <li>Free-to-enter hackathons and events</li>
                <li>Swag and prizes for participants</li>
                <li>Workshop tools and software licenses</li>
                <li>Community management and moderation</li>
                </ul>
            </CardContent>
            </Card>

            {/* Transparency Card */}
            <Card className="bg-black/40 shadow-lg ring-1 ring-black/5 rounded-xl">
            <CardHeader>
                <CardTitle className="text-purple-200 text-xl">Our Commitment to Transparency</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-purple-300 text-sm space-y-2">
                <li>We’re fiscally sponsored by Hack Club Bank (501(c)(3))</li>
                <li>Public financial records available on request</li>
                <li>Clear reporting on where donations are used</li>
                <li>No hidden fees—100% goes to Hack United’s mission</li>
                <li>Annual community transparency report</li>
                </ul>
            </CardContent>
            </Card>
        </div>
        </motion.div>
    </div>
  );
}
