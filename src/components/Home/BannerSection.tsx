"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import LottieFirst from "../../data/Lottie-1.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const BannerSection: React.FC = () => {
  return (
    <section
      className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"
      aria-label="Hero section"
    >
      <div className="container max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
        >
          <Fade cascade damping={0.1} triggerOnce>
            <p
              className="text-sm uppercase tracking-[0.3em] mb-4 text-blue-600 dark:text-blue-400 font-semibold"
              aria-label="Section tagline"
            >
              Enterprise Software Development
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400 mb-6">
              Transform Your Business with Enterprise-Grade Software Solutions
            </h1>
            <p className="text-xl sm:text-2xl font-light mt-6 border-l-4 border-blue-400 pl-5 text-gray-800 dark:text-gray-200 leading-relaxed">
              We build custom software that transforms how enterprises operate, helping teams move faster, work smarter, and stay ahead of the competition.
            </p>
            <p className="mt-6 text-lg leading-relaxed max-w-xl text-gray-700 dark:text-gray-300">
              Over the years, we've worked with organizations across industries—from startups scaling fast to Fortune 500 companies modernizing legacy systems. Our team understands that great software isn't just about code; it's about solving real business challenges with technology that's built to last.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button
                asChild
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg px-8 py-6 text-base font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                <Link href="/services">View Our Solutions</Link>
              </Button>
            </div>
          </Fade>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          aria-hidden="true"
        >
          <div className="w-full max-w-[500px] lg:max-w-[600px]">
            <Lottie
              animationData={LottieFirst}
              className="w-full h-auto"
              loop
              autoplay
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;

