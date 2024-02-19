import Banner from "./ui/components/Banner";
import LocationInfo from "./ui/components/LocationInfo";
import { NavBar } from "./ui/components/navBar";

export default function Home() {
  return (
    <main>
      <div>
      <NavBar/>
      <Banner/>
     <LocationInfo/>

      </div>
    </main>
  );
}
