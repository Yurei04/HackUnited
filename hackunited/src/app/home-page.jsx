import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Hero from "@/pages/hero";
import About from "@/pages/about";
import Community from "@/pages/community";
import Events from "@/pages/events";
import Goals from "@/pages/goals";
import Initiatives from "@/pages/initiatives";
import JoinUs from "@/pages/join-us";
import Footer from "@/pages/footer";
import NavBar from "@/app/navbar";



export default function HomePageLayout () {
    return (
        <div className="overflow-x-hidden">
        <NavBar />
        <Hero />
        <br />
        <About />
        <Community />
        <Events />
        <Goals />
        <Initiatives />
        <JoinUs />
        <Footer />
        </div>
    )
}