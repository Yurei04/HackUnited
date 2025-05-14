import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Hero from "@/pages/hero";
import SiteHeader from "@/components/site-header";
import About from "@/pages/about";
import Community from "@/pages/community";
import Events from "@/pages/events";
import Goals from "@/pages/goals";
import Initiatives from "@/pages/initiatives";
import JoinUs from "@/pages/join-us";
import ContactPage from "../contact-us";
import Footer from "../footer";



export default function HomePageLayout () {
    return (
            <SidebarProvider className="flex flex-col p-0 m-0 items-center justify-center overflow-x-hidden">
                <SiteHeader />
                <Hero />
                <br />
                <About />
                <Community />
                <Events />
                <Goals />
                <Initiatives />
                <JoinUs />
                <ContactPage />
                <Footer />
            </SidebarProvider>
    )
}