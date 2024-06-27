import React from "react";

import Image from "next/image";
import About from "./About";
import HowItWorks from "./HowItWorks";
import { Features } from "./Features";
import Services from "./Services";
import Sponsors from "./Sponsors";
import Cta from "./Cta";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Pricing from "./Pricing";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import { FAQ } from "./Faq";
import { ScrollToTop } from "./ScrollToTop";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <NewsLetter />
      <FAQ />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
