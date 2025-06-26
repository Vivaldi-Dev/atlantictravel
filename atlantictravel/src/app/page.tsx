'use client'

import React, { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Loader from "./components/loader/Loader";

const Banner = dynamic(() => import("./components/banner/Banner"), { ssr: false });
const Welcome = dynamic(() => import("./components/welcome/Welcome"), { ssr: false });
const TripleSlider = dynamic(() => import("./components/sliders/TripleSlider"), { ssr: false });
const WhaySection = dynamic(() => import("./components/sectionwhy/Whay"), { ssr: false });
const Pacotes = dynamic(() => import("./components/pacotes/Pacotes"), { ssr: false });
const Pronto = dynamic(() => import("./components/pronto/Pronto"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("alreadyVisited");

    if (alreadyVisited) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("alreadyVisited", "true");
      }, 2000); 
    }
  }, []);

  const renderedContent = useMemo(() => (
    <>
      <Banner />
      <Welcome />
      <TripleSlider />
      <WhaySection />
      <Pacotes />
      <Pronto />
    </>
  ), []);

  return (
    <div className="relative">
      {isLoading ? <Loader /> : renderedContent}
    </div>
  );
}
