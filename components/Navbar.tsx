import Image from "next/image";
import React from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 gap-4 absolute">
      <Image width={50} height={50} src={"/logo.png"} className="rounded" alt="logo" />
      <div className="flex items-center">
        <p>
          <NumberTicker
            value={5000}
            className="whitespace-pre-wrap text-xl font-medium tracking-tighter text-black dark:text-white"
          />{" "}
          + companies Funded
        </p>
      </div>
    </div>
  );
};

export default Navbar;
