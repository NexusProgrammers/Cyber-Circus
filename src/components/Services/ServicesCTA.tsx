"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const ServicesCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 w-fit mx-auto mb-6">
              <MessageCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Let&apos;s Discuss Your Project
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Ready to start your next project? Get in touch and let's discuss what you're trying to build. We'll help you understand your options and create a plan that fits your goals and budget.
            </p>
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
        </Fade>
      </div>
    </section>
  );
};

export default ServicesCTA;

