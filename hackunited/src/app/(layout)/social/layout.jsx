import NavBar from "@/app/navbar";
import Footer from "@/pages/footer";

export default function SocialLayout({ children }) {
  return (

    <div>
        <NavBar />
        {children}
        <Footer />
    </div>


  );
}
