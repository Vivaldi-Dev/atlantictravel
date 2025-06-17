import Header from "./components/navbar/Header";
import Banner from "./components/banner/Banner";
import Welcome from "./components/welcome/Welcome";
import TripleSlider from "./components/sliders/TripleSlider";
import WhaySection from "./components/sectionwhy/Whay";
import Pacotes from "./components/pacotes/Pacotes";
import Pronto from "./components/pronto/Pronto";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Welcome />
      <TripleSlider />
      <WhaySection />
      <Pacotes />
      <Pronto />
    </div>
  );
}
