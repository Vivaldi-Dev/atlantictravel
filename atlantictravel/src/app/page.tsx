import Image from "next/image";
import Header from "./components/navbar/Header";
import Banner from "./components/banner/Banner";
import Welcome from "./components/welcome/Welcome";
import TripleSlider from "./components/sliders/TripleSlider";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Welcome />
      <TripleSlider />
    </div>
  );
}
