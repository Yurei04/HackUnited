import NavBar from "@/app/navbar";
import Footer from "@/pages/footer";

export default function TeamLayout({ children }) {
  return (
    <div>
      <NavBar />
            {children}
        <Footer />
    </div>
  );
}
