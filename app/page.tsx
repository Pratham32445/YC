"use client";
import Founders from "@/components/Founders";
import FundedCompanies from "@/components/FundedCompanies";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Founders />
      <FundedCompanies />
    </div>
  );
};

export default Home;
