import SiteHeader from "@/app/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import Teams from "@/pages/teams";



export default function TeamPageLayout () {
    return (
        <div className="flex flex-col p-0 m-0 items-center justify-center overflow-x-hidden">
            <SidebarProvider className="flex flex-col p-0 m-0 items-center justify-center overflow-x-hidden">
                <SiteHeader />
                <Teams />
            </SidebarProvider>
        </div>
    )
}