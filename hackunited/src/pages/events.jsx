"use client"

import {
Card,
CardContent,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
} from "lucide-react"

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
    <section id="Events" className="w-full min-h-screen py-20 px-6">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto flex flex-col gap-12 max-w-6xl items-center justify-center"
        >
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
            Current Event
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 w-full">
            {current.currentEvent.map((event) => (
            <div key={event.id} className="flex lg:flex-row sm:flex-col">
                <div
                key={`text-${event.id}`}
                className="flex flex-col justify-between gap-4 p-4 bg-black/20 border shadow-md backdrop-blur-md lg:rounded-l-xl md:rounded-t-xl w-full lg:w-1/2 text-sm"
                >
                    <div className="space-y-3">
                        <div className="text-xl text-purple-200 flex items-center gap-2">
                        <Laptop className="text-purple-400 w-5 h-5" />
                        {event.title}
                        </div>

                        <div className="text-purple-300 space-y-2">
                        <p><Calendar className="inline w-4 h-4" /> <strong>Date:</strong> {event.date} | {event.theme}</p>
                        <p>{event.des}</p>
                        <p><MapPin className="inline w-4 h-4" /> <strong>Location:</strong> {event.location}</p>
                        <p><Users className="inline w-4 h-4" /> <strong>Category:</strong> {event.category}</p>
                        <p><Users className="inline w-4 h-4" /> <strong>Team Size:</strong> {event.teams}</p>
                        <p><Gift className="inline w-4 h-4" /> <strong>Prizes:</strong> {event.prizes}</p>
                        <p><BookOpen className="inline w-4 h-4" /> <strong>Workshops:</strong> {event.workshop}</p>
                        <p><Gavel className="inline w-4 h-4" /> <strong>Judges:</strong> {event.judges}</p>
                        </div>
                    </div>

                    <p className="text-xs text-purple-400">
                        Free entry for students globally — join our{" "}
                        <Link href="#" className="underline text-blue-400">Discord</Link> to participate!
                    </p>
                </div>

                <div
                key={`video-${event.id}`}
                className="flex flex-col justify-between gap-3 p-4 bg-black/20 border shadow-md backdrop-blur-md  lg:rounded-r-xl sm:rounded-b-xl w-full lg:w-1/2 text-sm"
                >
                <div>
                    <div className="text-md text-purple-100 font-medium mb-1">
                    🎥 {event.title} – Promo Video
                    </div>

                    <div className="aspect-video rounded-md overflow-hidden shadow-sm">
                    <iframe
                        src={`https://www.youtube.com/embed/${event.youtube.split("v=")[1] || event.youtube.split("/").pop()}`}
                        title={`YouTube video for ${event.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                    </div>

                    <p className="mt-3 text-purple-300 text-xs">
                    Watch this quick intro to get a feel for {event.title} and what to expect!
                    </p>
                </div>

                <Button
                    className="mt-3 bg-purple-600 hover:bg-purple-500 text-purple-100 self-start"
                    onClick={() => window.open(event.devpost, "_blank")}
                >
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </div>
            </div>
            ))}
        </div>
        </motion.div>


        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto flex flex-col gap-16 max-w-7xl"
        >

            <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500 mt-10">
                Check Out Our Previous Hackathons!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chartData.dataset.map((cards) => (
                <Card
                key={cards.id}
                className="rounded-3xl borde hover:border-purple-500 bg-black/20 shadow-lg backdrop-blur-md overflow-hidden p-0"
                >
                <div className="w-full overflow-hidden rounded-t-3xl">
                    <img
                    src={cards.imageUrl}
                    alt={cards.imageAlt || cards.title}
                    className="w-full h-full object-cover"
                    />
                </div>

                <CardHeader className="pl-4">
                    <CardTitle className="text-purple-200 text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5" /> {cards.title}
                    </CardTitle>
                    <p className="text-xs text-purple-300 flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {cards.date}
                    </p>
                    <p className="text-xs text-purple-300">{cards.theme}</p>
                </CardHeader>

                <CardContent className="text-xs text-purple-300 space-y-2 p-4 pt-0">
                    <p><Users className="inline w-4 h-4" /> <strong>Participants:</strong> {cards.participats}</p>
                    <p><FolderKanban className="inline w-4 h-4" /> <strong>Projects:</strong> {cards.projects ?? "N/A"}</p>
                    <p><DollarSign className="inline w-4 h-4" /> <strong>Prize Pool:</strong> ${cards.prizePool}</p>
                    <p><Handshake className="inline w-4 h-4" /> <strong>Sponsors:</strong> {cards.sponsors ?? "N/A"}</p>
                    <p><BookOpen className="inline w-4 h-4" /> <strong>Workshops:</strong> {cards.workshop} ({cards.workshopAttendess} attendees)</p>
                    <p><Gavel className="inline w-4 h-4" /> <strong>Judges:</strong> {cards.judges}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                    <Button
                        className="bg-purple-600 hover:bg-purple-500 text-purple-100 cursor-pointer"
                        onClick={() => window.open(cards.articleRecap, "_blank")}
                    >
                        <FileText className="mr-1 w-4 h-4" /> Article
                    </Button>
                    <Button
                        variant="outline"
                        className="border-purple-500 text-purple-200 hover:bg-purple-800 cursor-pointer"
                        onClick={() => window.open(cards.devpost, "_blank")}
                    >
                        <Link2 className="mr-1 w-4 h-4" /> Devpost
                    </Button>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
        </motion.div>

    </section>
    )
}
