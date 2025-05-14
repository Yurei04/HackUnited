"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import {
    Calendar,
    MapPin,
    Users,
    Gift,
    BookOpen,
    Gavel,
    Laptop,
    Link2,
    ArrowRight,
    Sparkles,
    FolderKanban,
    DollarSign,
    Handshake,
    FileText
} from "lucide-react";


const chartData = {
  dataset: [
    {
        id: 1,
        title: "United Hacks V1",
        date: "August, 2023",
        theme: "Mental Health Theme",
        participats: 400,
        projects: 50,
        prizePool: 5000,
        sponsors: 10,
        workshopAttendess: 100,
        workshop: 10,
        judges: "Industry professional Judges",
        articleRecap: "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology",
        devpost: "https://unitedhacks23.devpost.com/"
    },
     {
        id: 2,
        title: "United Hacks V1",
        date: "August, 2023",
        theme: "Mental Health Theme",
        participats: 400,
        projects: 50,
        prizePool: 5000,
        sponsors: 10,
        workshopAttendess: 100,
        workshop: 10,
        judges: "Industry professional Judges",
        articleRecap: "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology",
        devpost: "https://unitedhacks23.devpost.com/"
    },
         {
        id: 2,
        title: "United Hacks V1",
        date: "August, 2023",
        theme: "Mental Health Theme",
        participats: 400,
        projects: 50,
        prizePool: 5000,
        sponsors: 10,
        workshopAttendess: 100,
        workshop: 10,
        judges: "Industry professional Judges",
        articleRecap: "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology",
        devpost: "https://unitedhacks23.devpost.com/"
    },
         {
        id: 2,
        title: "United Hacks V1",
        date: "August, 2023",
        theme: "Mental Health Theme",
        participats: 400,
        projects: 50,
        prizePool: 5000,
        sponsors: 10,
        workshopAttendess: 100,
        workshop: 10,
        judges: "Industry professional Judges",
        articleRecap: "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology",
        devpost: "https://unitedhacks23.devpost.com/"
    },
  ],
}

const current = {
    currentEvent: [
        {
            id: 1,
            title: "United Hacks V5",
            date: "July 11-13, 2025",
            theme: "Mental Health Theme",
            des: "A hackathon is a contest where in a certain time frame you can build anything ranging from an app, website, algorithm, a robot, or actually anything!",
            location: "Online Hackathon, Free Entry!",
            category: "Beginner and advanced hackers welcome!",
            teams: "Teams of 1 through 4",
            prizes: "Cool prizes and FREE SWAG!",
            workshop: "Workshops teaching you more then just coding mechanics.",
            judges: "Industry Professional Judges (network!)",
            youtube: "https://youtu.be/tETq2E0kPE0",
            devpost: "https://unitedhacks23.devpost.com/"
        }
    ]
}

export default function Events () {

    return (
        <div className="flex flex-col w-full min-h-screen mt-10">
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
            className="flex flex-1 flex-col gap-4 p-4 pt-0"
        >
            <div>
                <h1 className="text-4xl sm:text-5xl lg:text-8xlr flex flex-row gap-5 items-center justify-center">
                    <span className="text-transparent bg-clip-text text-6xl bg-gradient-to-r from-gray-400 to-purple-500">
                        Current Event 
                    </span>
                </h1>
            </div>
            <div className="min-h-[100vh]flex-1 rounded-xl md:min-h-min">
                {current.currentEvent.map((event) => (
                    <Card
                    key={event.id}
                    className="isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5 p-6 max-w-4xl mx-auto"
                    >
                        <CardHeader>
                            <CardTitle className="text-purple-400 text-2xl flex items-center gap-2">
                                <Laptop className="text-purple-300 h-6 w-6" />
                                {event.title}
                            </CardTitle>
                            <p className="text-sm text-purple-300 flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {event.date} | {event.theme}
                            </p>
                        </CardHeader>
                        <CardContent className="space-y-3 flex lg:flex-row sm:flex-col">
                            <div className="text-justify justify-between">
                                    <p className="text-justify">{event.des}</p>
                                    <br />
                                    <p className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-purple-300" />
                                    <strong>Location:</strong> {event.location}
                                    </p>

                                    <p className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-purple-300" />
                                    <strong>Category:</strong> {event.category}
                                    </p>

                                    <p className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-purple-300" />
                                    <strong>Team Size:</strong> {event.teams}
                                    </p>

                                    <p className="flex items-center gap-2">
                                    <Gift className="h-5 w-5 text-purple-300" />
                                    <strong>Prizes:</strong> {event.prizes}
                                    </p>

                                    <p className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-purple-300" />
                                    <strong>Workshops:</strong> {event.workshop}
                                    </p>

                                    <p className="flex items-center gap-2">
                                    <Gavel className="h-5 w-5 text-purple-300" />
                                    <strong>Judges:</strong> {event.judges}
                                    </p>
                                <div className="pt-4">
                                    <Button
                                        className="bg-purple-600 hover:bg-purple-500 text-white"
                                        onClick={() => window.open(event.devpost, "_blank")}
                                    >
                                        Register Now! <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="aspect-video w-full m-2 rounded-lg overflow-hidden">
                                <iframe
                                    src={`https://www.youtube.com/embed/${event.youtube.split("v=")[1] || event.youtube.split("/").pop()}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                        </CardContent>
                        <CardFooter>
                            <p className="text-xs ">
                                free entry for any high school or college student anywhere in the world
                                note: must be in our <span className="underline text-blue-600"><Link href="#">discord</Link></span> to participate!
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <Separator orientation="horizontal" className="mx-2 data-[orientation=vertical]:h-4 bg-purple-500" />
            <div>
                <h1 className="text-4xl sm:text-5xl lg:text-8xlr flex flex-row gap-5 text-center items-center justify-center">
                    <span className="text-transparent bg-clip-text text-5xl bg-gradient-to-r from-gray-400 to-purple-500">
                        Check Out Our Previous Hackathons!
                    </span>
                </h1>
            </div>

            <div className="flex lg:flex-row sm:flex-col flex-1/4 justify-between m-5">
                {chartData.dataset.map((cards) => (
                    <Card className="rounded-4xl isolate aspect-video bg-black/50 shadow-lg ring-1 ring-black/5 sm:m-5">
                        <CardHeader>
                            <CardTitle className="text-purple-400 text-2xl flex items-center gap-2">
                            <Sparkles className="text-purple-300 h-5 w-5" />
                            {cards.title}
                            </CardTitle>
                            <p className="text-sm text-purple-300 flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {cards.date}
                            </p>
                            <p className="text-sm text-purple-300">{cards.theme}</p>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-purple-300" />
                            <strong>Participants:</strong> {cards.participats}
                            </p>
                            <p className="flex items-center gap-2">
                            <FolderKanban className="h-4 w-4 text-purple-300" />
                            <strong>Projects:</strong> {cards.projects}
                            </p>
                            <p className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-purple-300" />
                            <strong>Prize Pool:</strong> ${cards.prizePool}
                            </p>
                            <p className="flex items-center gap-2">
                            <Handshake className="h-4 w-4 text-purple-300" />
                            <strong>Sponsors:</strong> {cards.sponsors}
                            </p>
                            <p className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-purple-300" />
                            <strong>Workshops:</strong> {cards.workshop} ({cards.workshopAttendess} attendees)
                            </p>
                            <p className="flex items-center gap-2">
                            <Gavel className="h-4 w-4 text-purple-300" />
                            <strong>Judges:</strong> {cards.judges}
                            </p>

                            <div className="flex gap-4 pt-4">
                            <Button
                                className="bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-2"
                                onClick={() => window.open(cards.articleRecap, "_blank")}
                            >
                                <FileText className="h-4 w-4" />
                                Article Recap <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button
                                className="bg-purple-800 hover:bg-purple-700 text-white flex items-center gap-2"
                                onClick={() => window.open(cards.devpost, "_blank")}
                            >
                                <Link2 className="h-4 w-4" />
                                Devpost <ArrowRight className="h-4 w-4" />
                            </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
        </div>
    )
}