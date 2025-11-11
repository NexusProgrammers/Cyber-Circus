/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import NoPositions from "./NoPosition";
import OpenPosition from "./OpenPosition";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";

const CareerOpportunities = ({ showOpenPositions, positions }) => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities and professional development programs to advance your career.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented engineers in a supportive, inclusive environment that values innovation.",
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Comprehensive health insurance, flexible work arrangements, and competitive compensation packages.",
    },
    {
      icon: Briefcase,
      title: "Impactful Projects",
      description: "Build enterprise solutions that transform businesses and create meaningful impact for global clients.",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 w-fit mx-auto mb-6">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Join Our Team
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Career Opportunities
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Find your place in our elite engineering team and help us build innovative solutions that transform how businesses operate in the digital world. We're seeking exceptional talent who are passionate about technology and want to make an impact.
            </p>
          </div>
        </Fade>

        {showOpenPositions ? (
          <OpenPosition positions={positions} />
        ) : (
          <NoPositions />
        )}

        <div className="mt-20">
          <Fade cascade damping={0.1} triggerOnce>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Why Work at Cyber Circus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunities;
