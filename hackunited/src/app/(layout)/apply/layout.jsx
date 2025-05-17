
import NavBar from "@/app/navbar";
import Footer from "@/pages/footer";

export default function ApplyLayout({ children }) {
  return (
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>

  );
}
