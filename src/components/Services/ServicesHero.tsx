"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Smartphone, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceHighlight = {
  icon: LucideIcon;
  text: string;
};

const services: ServiceHighlight[] = [
  { icon: Code, text: "Enterprise Web Development" },
  { icon: Smartphone, text: "Mobile Applications" },
  { icon: Cloud, text: "Cloud Architecture" },
  { icon: Database, text: "Data Engineering" },
];

const ServicesHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-gray-100/[0.02] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Fade cascade damping={0.1} triggerOnce>
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 w-fit mx-auto mb-6">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Our Services
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Enterprise Software Solutions{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  That Transform Businesses
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We build software that solves real problems. Whether you need a custom web application, a mobile app, or help modernizing your infrastructure, we've got the expertise to make it happen. Every project is different, and we treat yours that way.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {service.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
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
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

