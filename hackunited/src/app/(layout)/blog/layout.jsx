import SiteHeader from "@/app/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/pages/footer";

export default function BlogLayout({ children }) {
  return (

      <SidebarProvider className="flex flex-col m-0 items-center justify-center">
        <SiteHeader />
        {children}
        <Footer />
      </SidebarProvider>

  );
}
