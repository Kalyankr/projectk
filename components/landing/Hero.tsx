import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container grid place-items-center gap-10 py-20 pt-36 md:py-36 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
              Empower
            </span>{" "}
            Your Realty Business with
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Smart Rental Management
            </span>{" "}
          </h2>
        </main>
        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          Build your rental business effortlessly with the required tools to
          Stay Organized and Elevate Efficiency.
        </p>
        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <Link
            href="/register"
            className={`w-full text-[14px] md:w-1/3 ${buttonVariants({})}`}
          >
            Get Started
          </Link>
          <Link
            href="/auth/login"
            className={`w-full text-[14px] md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Login
          </Link>
        </div>
      </div>
      {/* Hero card or image */}
      <div className="z-10">
        <div className="relative hidden flex-row flex-wrap gap-8 lg:flex">
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
