'use client'

import React, { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Loader from "./components/loader/Loader";

const Header = dynamic(() => import("./components/navbar/Header"), { ssr: false });
const Banner = dynamic(() => import("./components/banner/Banner"), { ssr: false });
const Welcome = dynamic(() => import("./components/welcome/Welcome"), { ssr: false });
const TripleSlider = dynamic(() => import("./components/sliders/TripleSlider"), { ssr: false });
const WhaySection = dynamic(() => import("./components/sectionwhy/Whay"), { ssr: false });
const Pacotes = dynamic(() => import("./components/pacotes/Pacotes"), { ssr: false });
const Pronto = dynamic(() => import("./components/pronto/Pronto"), { ssr: false });
const Footer = dynamic(() => import("./components/footer/Footer"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  const renderedContent = useMemo(() => (
    <>
      <Header />
      <Banner />
      <Welcome />
      <TripleSlider />
      <WhaySection />
      <Pacotes />
      <Pronto />
      <Footer />
    </>
  ), []);

  return (
    <div className="relative">
      {isLoading ? <Loader /> : renderedContent}
    </div>
  );
}
