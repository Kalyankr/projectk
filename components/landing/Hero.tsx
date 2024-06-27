import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-36 gap-10 pt-36">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Empower
            </span>{" "}
            Your Realty Business with
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Smart Rental Management
            </span>{" "}
          </h2>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your rental business effortlessly with the required tools to
          Stay Organized and Elevate Efficiency.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/register"
            className={`w-full md:w-1/3 text-[14px] ${buttonVariants({})}`}
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className={`w-full md:w-1/3 text-[14px] ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Login
          </Link>
        </div>
      </div>
      {/* Hero card or image */}
      <div className="z-10">
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative ">
          <Image
            src="/herodash.png"
            width={600}
            height={600}
            alt="Hero Image"
          />
        </div>
      </div>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

export default Hero;
