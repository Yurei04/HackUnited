import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Hero from "@/pages/hero";
import SiteHeader from "@/components/site-header";
import About from "@/pages/about";



export default function HomePageLayout () {
    return (
            <SidebarProvider className="flex flex-col p-0 m-0 items-center justify-center">
                <SiteHeader />
                <Hero />
                <br />
                <About />
            </SidebarProvider>
    )
}