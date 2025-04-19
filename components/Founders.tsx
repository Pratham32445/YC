import Image from "next/image";
import React from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const foundersData = [
  {
    name: "Paul Graham",
    description: [
      "Co-founder of Y Combinator",
      "💡 Creator of the first SaaS (Viaweb), acquired by Yahoo",
      '📚 Author of iconic essays like "Hackers & Painters"',
      "🚀 Helped launch companies like Airbnb, Dropbox, and Stripe",
    ],
    images: "/paul.jpg",
    socialHandle: {
      FaXTwitter: "https://x.com/paulg",
    },
  },
  {
    name: "Jessica Livingston",
    description: [
      "Co-founder of Y Combinator",
      "📚 Author of 'Founders at Work'",
      "🏆 Former director of marketing at investment bank Adams Harkness",
      "🚀 Key player in making Y Combinator the most prestigious startup accelerator",
    ],
    images: "/jessica.jpg",
    socialHandle: {
      FaLinkedin: "https://www.linkedin.com/in/jessicalivingston1",
      FaXTwitter: "https://x.com/jesslivingston",
    },
  },
];

const Founders = () => {
  return (
    <div className="max-w-3xl mx-auto mt-36" id="#companies">
      <h1 className="text-center text-3xl font-bold mb-2">
        Excellent Founders
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        The visionaries behind Y Combinator
      </p>

      <div className="space-y-16">
        {foundersData.map((founder, index) => (
          <div
            key={founder.name}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={founder.images}
                  alt={`Photo of ${founder.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <h2 className="font-bold text-2xl mb-4">{founder.name}</h2>

              <ul className="space-y-2 mb-6">
                {founder.description.map((item, i) => (
                  <li key={i} className="text-sm text-neutral-500">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-5">
                {founder.socialHandle.FaXTwitter && (
                  <a
                    href={founder.socialHandle.FaXTwitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter size={20} />
                  </a>
                )}
                {founder.socialHandle.FaLinkedin && (
                  <a
                    href={founder.socialHandle.FaLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
