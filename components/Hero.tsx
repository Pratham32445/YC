"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import Link from "next/link";

const Hero = () => {
  const confettiRef = useRef<null | ConfettiRef>(null);
  useEffect(() => {
    if (confettiRef.current) {
      confettiRef.current.fire();
    }
  }, []);

  return (
    <motion.div
      initial={{ translateY: 50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="gradient-background flex justify-center items-center w-full min-h-screen"
    >
      <div>
        <h1 className="text-9xl font-bold text-center">
          20 Years{" "}
          <Image
            className="inline rounded"
            src={"/logo.png"}
            width={100}
            height={100}
            alt="logo"
          />{" "}
          of <br /> <span className="text-[#FF5D17]">YC</span>
        </h1>
          <p className="text-center mt-7 text-lg">
            Pioneering startup acceleration since 2005. <br />
            Launching over 4,000 companies now worth $600B+. <br />
            From Airbnb to Stripe, we &apos; ve helped shape the future.
          </p>
        <div className="flex justify-center">
          <Link href={"#companies"}>
            <Button
              className="bg-[#FF5D17] hover:bg-[#FF5D17] text-white p-8 mt-5 cursor-pointer"
              onClick={() => confettiRef.current?.fire({})}
            >
              Checkout funded Companies
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[250px] bg-gradient-to-br from-[#d57a53] to-[#da5218] opacity-50 blur-3xl pointer-events-none z-0" />
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
      />
    </motion.div>
  );
};

export default Hero;
