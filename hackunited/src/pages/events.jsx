"use client";

import {
Card,
CardContent,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
FileText,
} from "lucide-react";


const chartData = {
    dataset: [
        {
        id: 1,
        title: "United Hacks V1",
        imageUrl: "/images/imgtemp.jpg",
        date: "August, 2023",
        theme: "Mental Health Theme",
        participats: 400,
        projects: 50,
        prizePool: 5000,
        sponsors: 10,
        workshopAttendess: 100,
        workshop: 10,
        judges: "Industry professional judges",
        articleRecap: "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology",
        devpost: "https://unitedhacks23.devpost.com/",
        },

        {
        id: 2,
        title: "United Hacks V2",
        imageUrl: "/images/imgtemp.jpg",   
        date: "January, 2024",
        theme: "Resolutions Theme",
        participats: 400,
        projects: 75,
        prizePool: 15000,
        sponsors: 15,
        workshopAttendess: 100,
        workshop: 10,
        judges: "Industry professional & student judges",
        articleRecap: "https://blog.hackunited.org/united-hacks-v2-recap-new-resolutions-and-innovation",
        devpost: "https://unitedhacks24.devpost.com/",
        },

        {
        id: 3,
        title: "United Hacks V3",
        imageUrl: "/images/imgtemp.jpg",
        date: "September, 2024",
        theme: "Communication Theme",
        participats: 150,
        projects: null,
        prizePool: 2000,
        sponsors: null,
        workshopAttendess: 75,
        workshop: 10,
        judges: "Industry professional judges",
        articleRecap: "https://blog.hackunited.org/united-hacks-v3-mini-hacks-and-communication-focus",
        devpost: "https://unitedhacks-v3.devpost.com/",
        },

        {
        id: 4,
        title: "United Hacks V4",
        imageUrl: "/images/imgtemp.jpg",
        date: "January, 2025",
        theme: "Social Impact Theme",
        participats: 400,
        projects: 80,
        prizePool: 10000,
        sponsors: 10,
        workshopAttendess: 100,
        workshop: 10,
        judges: "Industry professional judges",
        articleRecap: "https://blog.hackunited.org/united-hacks-v4-social-impact-through-tech",
        devpost: "https://unitedhacks-v4.devpost.com/",
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
        workshop: "Workshops teaching you more than just coding mechanics.",
        judges: "Industry Professional Judges (network!)",
        youtube: "https://youtu.be/tETq2E0kPE0",
        devpost: "https://unitedhacks23.devpost.com/",
        },
    ],
}



export default function Events() {
    return (
        <section className="w-full min-h-screen py-20 px-6 bg-black/50" id="events">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto flex flex-col gap-12 items-center"
            >
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
                    Current Events
                </span>
                </h1>
                <p className="text-purple-200 max-w-2xl mx-auto">
                Stay updated on live hackathons, workshops, and community events.
                </p>
            </div>

        {current.currentEvent.map((event) => (
            <motion.div
            key={event.id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-3xl bg-white/5 shadow-xl backdrop-blur-lg border border-white/10 w-full"
            >
            <div className="space-y-4 text-sm text-purple-300 flex flex-col justify-between">
                <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-purple-100 flex items-center gap-2">
                    <Laptop className="text-purple-400 w-5 h-5" /> {event.title}
                </h2>
                <p className="text-purple-300">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    <strong>Date:</strong> {event.date} | {event.theme}
                </p>
                <p>{event.des}</p>
                <p>
                    <MapPin className="inline w-4 h-4 mr-1" />
                    <strong>Location:</strong> {event.location}
                </p>
                <p>
                    <Users className="inline w-4 h-4 mr-1" />
                    <strong>Category:</strong> {event.category}
                </p>
                <p>
                    <Users className="inline w-4 h-4 mr-1" />
                    <strong>Team Size:</strong> {event.teams}
                </p>
                <p>
                    <Gift className="inline w-4 h-4 mr-1" />
                    <strong>Prizes:</strong> {event.prizes}
                </p>
                <p>
                    <BookOpen className="inline w-4 h-4 mr-1" />
                    <strong>Workshops:</strong> {event.workshop}
                </p>
                <p>
                    <Gavel className="inline w-4 h-4 mr-1" />
                    <strong>Judges:</strong> {event.judges}
                </p>
                </div>

                <div className="text-xs text-purple-400">
                Free entry for students globally — join our{" "}
                <Link href="#" className="underline text-blue-400">
                    Discord
                </Link>{" "}
                to participate!
                </div>

                <Button
                className="bg-purple-600 hover:bg-purple-500 text-white mt-2 w-fit cursor-pointer"
                onClick={() => window.open(event.devpost, "_blank")}
                >
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>

            <div className="flex flex-col justify-between space-y-4">
                <h3 className="text-purple-100 text-sm font-medium">
                🎥 {event.title} – Promo Video
                </h3>
                <div className="aspect-video overflow-hidden rounded-xl shadow-md">
                <iframe
                    src={`https://www.youtube.com/embed/${event.youtube.split("v=")[1] || event.youtube.split("/").pop()}`}
                    title={`YouTube video for ${event.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
                </div>
                <p className="text-xs text-purple-300">
                Watch this quick intro to see what to expect!
                </p>
            </div>
            </motion.div>
        ))}
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto mt-28"
        >
        <div className="p-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
                    Past Hackathons
                </span>
            </h1>
            <p className="text-center text-purple-200 max-w-2xl mx-auto">
                Explore the projects, stories, and impact from our previous hackathons. See how our community tackled real-world problems with creativity and code.
            </p>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chartData.dataset.map((cards) => (
                <motion.div
                key={cards.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-3xl bg-white/5 p-4 shadow-xl backdrop-blur-lg border border-white/10 flex flex-col justify-between"
                >
                <div>
                    <img
                    src={cards.imageUrl}
                    alt={cards.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-lg font-semibold text-purple-100 mb-1 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> {cards.title}
                    </h3>
                    <p className="text-sm text-purple-300 flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" /> {cards.date}
                    </p>
                    <p className="text-xs text-purple-400 mb-3">{cards.theme}</p>

                    <div className="space-y-1 text-xs text-purple-300">
                    <p><Users className="inline w-4 h-4 mr-1" /> <strong>Participants:</strong> {cards.participats}</p>
                    <p><FolderKanban className="inline w-4 h-4 mr-1" /> <strong>Projects:</strong> {cards.projects ?? "N/A"}</p>
                    <p><DollarSign className="inline w-4 h-4 mr-1" /> <strong>Prize Pool:</strong> ${cards.prizePool}</p>
                    <p><Handshake className="inline w-4 h-4 mr-1" /> <strong>Sponsors:</strong> {cards.sponsors ?? "N/A"}</p>
                    <p><BookOpen className="inline w-4 h-4 mr-1" /> <strong>Workshops:</strong> {cards.workshop} ({cards.workshopAttendess} attendees)</p>
                    <p><Gavel className="inline w-4 h-4 mr-1" /> <strong>Judges:</strong> {cards.judges}</p>
                    </div>
                </div>

                <div className="flex gap-2 pt-4 mt-4 border-t border-white/10">
                    <Button
                    className="bg-purple-600 hover:bg-purple-500 text-white cursor-pointer"
                    onClick={() => window.open(cards.articleRecap, "_blank")}
                    >
                    <FileText className="mr-2 h-4 w-4" /> Article
                    </Button>
                    <Button
                    variant="outline"
                    className="border-purple-400 text-purple-200 hover:bg-purple-900 cursor-pointer"
                    onClick={() => window.open(cards.devpost, "_blank")}
                    >
                    <Link2 className="mr-2 h-4 w-4" /> Devpost
                    </Button>
                </div>
                </motion.div>
            ))}
            </div>

        </motion.div>
        </section>
    );
}
