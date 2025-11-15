"use client";

import React from "react";
import dynamic from "next/dynamic";
import LottieSecond from "../../data/Lottie-2.json";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const featureHighlights: FeatureItem[] = [
  {
    icon: "🚀",
    title: "Enterprise Performance",
    description:
      "Our solutions are built for scale with enterprise-grade architecture, cloud-native infrastructure, and performance optimization that ensures reliability and scalability.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "Protect your data with enterprise-grade security protocols, compliance standards, and rigorous security audits that safeguard your business-critical information.",
  },
  {
    icon: "⚡",
    title: "Future-Proof Technology",
    description:
      "Stay ahead with cloud-native architecture, modern frameworks, and cutting-edge technologies that scale and evolve with your business needs.",
  },
];

const BannerSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-gray-100/[0.02] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 w-fit">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  About Cyber Circus
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                Enterprise Software Development{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Excellence
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Founded on the belief that technology should solve real problems, Cyber Circus has grown into a trusted partner for businesses seeking to modernize their operations. We've built our reputation by delivering software that actually works—solutions that teams love to use and that deliver measurable impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                  className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-8 py-6 text-base font-semibold"
                >
                  <Link href="/portfolio">View Our Solutions</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">150+</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise Projects</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">98%</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-20 animate-pulse" />
                <Lottie
                  animationData={LottieSecond}
                  className="relative w-full max-w-[500px] mx-auto lg:mx-0"
                  loop
                  autoplay
                />
              </div>
            </motion.div>
          </div>
        </Fade>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <Fade cascade damping={0.1} triggerOnce>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureHighlights.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

