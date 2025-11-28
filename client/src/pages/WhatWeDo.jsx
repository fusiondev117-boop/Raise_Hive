import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Explore from "../assets/Explore.png";
import inspired from "../assets/inspired.png";
import perk from "../assets/perk.png";
import Journey from "../assets/Journey.png";
import Footer from "../components/Footer";
const WhatWeDo = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Subscribed successfully");
        setEmail("");
      } else {
        alert("Error subscribing");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Error subscribing");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-5xl lg:text-7xl font-semibold text-center mt-20 mb-10">
          What We Do?
        </h1>

        {/* Fund the next big thing Section */}
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold pb-3">Fund the next big thing</h2>
          <p className="text-justify">
            Raise Hive's crowdfunding campaigns are where new and groundbreaking
            products take flight, sometimes long before they hit mainstream
            availability. With thousands of campaigns launching every week,
            there's great tech, design, and much more around every corner —
            often with limited-time perks and pricing for the earliest backers.
            Before it's everywhere, it's on Raise Hive.
          </p>
        </div>

        {/* Join the journey from idea to market Section */}
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold pb-10">
            Join the journey from idea to market
          </h2>
          <div className="flex justify-center ">
            <img
              src={Journey}
              alt="Journey"
              className="object-contain h-auto max-w-full"
            />
          </div>
          <p className="text-justify pt-8">
            With Raise Hive, you have the opportunity to support entrepreneurs
            and new technology from the earliest stages of development. Be sure
            to evaluate every campaign closely and contribute at a level you can
            afford in the event that the team is unable to complete the project
            as planned.
          </p>
          <p className="text-justify">
            Browse campaigns, read the stories from the entrepreneurs
            themselves, evaluate the stage of development and any potential
            production risks — and then fund the projects that you want to help
            succeed.
          </p>
          <button
            className="bg-[#8c6dfd] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded mt-4 mb-4 text-white"
            onClick={() => navigate("/ExploreProjects")}
          >
            Explore Projects
          </button>
          <p className="text-center">
            Or{" "}
            <span className="text-[#808191] cursor-pointer">
              <a href="/Crowdfunding">learn more</a>
            </span>{" "}
            about crowdfunding and your role as a backer.
          </p>
        </div>

        {/* Newsletter Section - Modern Design */}
        <div className="my-20 mx-auto w-full">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-12 md:p-16 shadow-glow-multi hover:shadow-glow-multi transition-all duration-500 animate-gradient">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white font-inter font-semibold text-sm">Newsletter</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-manrope font-bold text-white mb-4 animate-slideInUp neon-glow">
                  Great Finds, Delivered Daily
                </h2>
                <p className="text-white/90 font-inter text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Discover the best and brightest projects on Raise Hive. Get curated updates on technology, design, film, and more — before they hit the mainstream.
                </p>

                {/* Newsletter Form */}
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                      type="email"
                      required
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 rounded-full bg-white dark:bg-white text-gray-900 placeholder:text-gray-500 outline-none focus:ring-4 focus:ring-white/30 transition-all font-inter"
                    />
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-inter font-semibold rounded-full transition-smooth hover:scale-110 hover-shine shadow-glow-multi whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  
                  <label className="flex items-center justify-center gap-2 text-white/80 text-sm">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/30 bg-white/20 text-primary-600 focus:ring-white/30" />
                    <span className="font-inter">
                      I agree to the{" "}
                      <a href="/TermsOfUse" className="underline hover:text-white">Terms of Use</a>
                      {" "}and have read the{" "}
                      <a href="/PrivacyPolicy" className="underline hover:text-white">Privacy Policy</a>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is a perk Section */}
        <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-6xl mx-auto pt-10">
          <img
            src={perk}
            alt="perk"
            className="w-96 h-86 object-contain rounded-lg"
          />
          <div className="text-center md:text-left md:pl-8">
            <h2 className="text-2xl font-bold pb-3">What is a perk?</h2>
            <p className="lg:pr-10">
              A perk is a reward or incentive offered by campaign owners to
              backers who contribute to their project. Perks can range from
              tangible items, like merchandise or limited-edition products, to
              intangible benefits, such as exclusive access, digital downloads,
              or personalized experiences. They are used to attract and
              encourage support from potential backers.
            </p>
          </div>
        </div>

        {/* Ready? Explore and Feeling Inspired Section */}
        <div className="text-center lg:my-8">
          <div className="flex flex-col lg:flex-row justify-center items-center my-4">
            <div className="flex flex-col items-center lg:mr-56 mb-10 md:mb-0">
              <img
                src={Explore}
                alt="Explore"
                className="w-24 md:w-32 h-auto object-cover"
              />
              <h1 className="text-3xl font-semibold py-4 md:mb-4 lg:pt-10">
                Ready? Explore
              </h1>
              <button
                className="bg-[#8c6dfd] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded"
                onClick={() => navigate("/ExploreProjects")}
              >
                Discover projects
              </button>
            </div>

            <div className="hidden lg:block lg:h-80 border-l border-gray-400 mx-6"></div>
            <div className="block lg:hidden w-96 border-t border-gray-400 my-20"></div>

            <div className="flex flex-col items-center lg:ml-56 mb-4 md:mb-0 ">
              <img
                src={inspired}
                alt="Inspired"
                className="w-24 md:w-32 h-auto object-cover"
              />
              <h1 className="text-3xl font-semibold py-4 md:mb-4 lg:pt-10">
                Feeling Inspired?
              </h1>
              <button className="bg-[#8c6dfd] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded">
                <a href="/create-campaign">Become an Entrepreneur</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhatWeDo;
