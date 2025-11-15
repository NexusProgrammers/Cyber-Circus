"use client";
import React from "react";
import dynamic from "next/dynamic";
import LottieThird from "../../data/Lottie-3.json";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const BannerSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <Fade cascade damping={0.1} triggerOnce>
              <div className="mb-2">
                <span className="px-4 py-1 bg-blue-500/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  Our Work
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
                  Enterprise Software Solutions Portfolio
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-xl">
                We've built everything from custom web platforms to mobile apps and enterprise systems. Take a look at some of the projects we're proud of—each one solved a real business challenge and delivered real results.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-4xl relative">
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -inset-4 bg-blue-500/5 dark:bg-blue-500/10 rounded-3xl blur-xl"
              />
              <div>
                <Lottie
                  animationData={LottieThird}
                  loop
                  autoplay
                  className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[600px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

