import Banner from "./ui/components/Banner";
import Experience from "./ui/components/Experience";
import Footer from "./ui/components/Footer";
import LocationInfo from "./ui/components/LocationInfo";
import { NavBar } from "./ui/components/navBar";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
        <Banner />
        <LocationInfo />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
