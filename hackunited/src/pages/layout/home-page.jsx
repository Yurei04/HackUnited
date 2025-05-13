import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Hero from "@/pages/hero";
import SiteHeader from "@/components/site-header";


export default function HomePageLayout () {
    return (
            <SidebarProvider className="flex flex-col">
                <SiteHeader />
                <Hero />
            </SidebarProvider>
    )
}