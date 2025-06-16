import Image from "next/image";
import Header from "./components/navbar/Header";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner/>
    </div>
  );
}
