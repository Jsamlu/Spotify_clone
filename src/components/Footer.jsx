import React from "react";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    { name: "Company", links: ["About", "Jobs", "For the Record"] },
    {
      name: "Communities",
      links: [
        "For Artists",
        "Developers",
        "Advertising",
        "Investors",
        "Vendors",
      ],
    },
    {
      name: "Useful Links",
      links: [
        "Support ",
        "Free Mobile App",
        "Popular By Country",
        "Import Your Music",
      ],
    },
    {
      name: "Spotify Plans",
      links: [
        "Premium Lite",
        "Premium Standard",
        "Premium Platinum",
        "Premium Student",
        "Spotify Free",
      ],
    },
  ];

  // const company = [
  //   "About",
  //   "Jobs",
  //   "For the Record"
  // ];
  // const communities = [
  //   "For Artists",
  //   "Developers",
  //   "Advertising",
  //   "Investors",
  //   "Vendors",
  // ];
  // const usefulLinks = [
  //   "Support ",
  //   "Free Mobile App",
  //   "Popular By Country",
  //   "Import Your Music",
  // ];
  // const spotifyPlans = [
  //   "Premium Lite",
  //   "Premium Standard",
  //   "Premium Platinum",
  //   "Premium Student",
  //   "Spotify Free",
  // ];

  const Social = [FaInstagram, FaTwitter, FaFacebook];
  const footerEndLinks = [
    "Legal",
    "Safety & Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessibility",
  ];
  return (
    <div className="w-full sm:pt-16 sm:pb-7 px-10">
      <hr className="text-[rgba(255,255,255,0.1)] mb-4 w-full " />
      <div className="py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
          {footerLinks.map((linkGroup, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-white font-bold mb-4 text-sm">
                {linkGroup.name}
              </h3>
              <ul className="flex flex-col gap-2">
                {linkGroup.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.7)] text-sm font-semibold hover:underline hover:text-gray-50 cursor-pointer transition-all duration-75"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex gap-4 items-start">
            {Social.map((Icon, index) => (
              <button
                key={index}
                className="bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)] px-2 py-2 text-[20px] rounded-full text-white "
              >
                <Icon />
              </button>
            ))}
          </div>
        </div>
        <hr className="text-[rgba(255,255,255,0.1)] mb-4 w-full my-10 " />
        <div className="flex justify-between items-center">
          <div className="sm:flex grid gap-4 ">
            {footerEndLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-[rgba(255,255,255,0.7)] text-sm font-medium  hover:text-gray-50 cursor-pointer transition-all duration-75"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-[rgba(255,255,255,0.7)]">&copy;2025 Spotify AB</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
