"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Code,
  Smartphone,
  Blocks,
  Paintbrush,
  ServerCog,
  CheckSquare,
  BarChart3,
} from "lucide-react";
import { Fade } from "react-awesome-reveal";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    title: "Enterprise Web Development",
    icon: Code,
    description:
      "We build web applications that actually work—fast, secure, and designed to scale with your business. Whether you need a simple dashboard or a complex enterprise platform, we've got you covered.",
    features: ["React/Next.js", "Node.js/Express", "AWS/Azure deployment"],
  },
  {
    title: "Mobile Application Development",
    icon: Smartphone,
    description:
      "Create mobile apps that users actually want to use. We build for both iOS and Android, ensuring your app feels native, performs well, and integrates seamlessly with your existing systems.",
    features: ["React Native", "Swift/Kotlin", "Seamless API integration"],
  },
  {
    title: "Cloud Architecture & DevOps",
    icon: ServerCog,
    description:
      "Modernize your infrastructure and automate your deployments. We'll help you move to the cloud, set up CI/CD pipelines, and build systems that can handle whatever you throw at them.",
    features: ["Docker/Kubernetes", "CI/CD pipelines", "Cloud architecture"],
  },
  {
    title: "Digital Transformation Consulting",
    icon: Blocks,
    description:
      "Sometimes you need more than code—you need a plan. We help businesses figure out what technology they actually need, how to get there, and what it means for their operations.",
    features: ["Enterprise architecture", "Legacy modernization", "Process optimization"],
  },
  {
    title: "UI/UX Design & User Experience",
    icon: Paintbrush,
    description:
      "Great software needs great design. We create interfaces that look good, feel intuitive, and make sense to the people who use them every day. Accessibility and usability aren't optional here.",
    features: ["Figma prototyping", "Design systems", "Accessibility focus"],
  },
  {
    title: "Quality Assurance & Testing",
    icon: CheckSquare,
    description:
      "We test everything—not just to make sure it works, but to make sure it works well. Automated testing, performance checks, and security audits are all part of the package.",
    features: ["Automated testing", "Performance testing", "Security audits"],
  },
  {
    title: "Enterprise Integration Services",
    icon: Blocks,
    description:
      "Connect the dots between your systems. We build APIs and integration platforms that let all your tools talk to each other, so your team doesn't have to jump between a dozen different apps.",
    features: ["API development", "Microservices", "System integration"],
  },
  {
    title: "Data Engineering & Analytics",
    icon: BarChart3,
    description:
      "Turn your data into something useful. We build pipelines, warehouses, and analytics platforms that help you understand what's happening in your business and make better decisions.",
    features: ["Data pipelines", "Analytics platforms", "Business intelligence"],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <Fade cascade damping={0.1} triggerOnce>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 border-l-4 border-blue-600 pl-3 inline-block mb-6">
              Enterprise Software Solutions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              From custom web applications to mobile solutions and cloud infrastructure—we offer the tools and expertise to transform your business. Every project is tailored to your needs, built to scale, and designed to deliver results.
            </p>
          </div>
        </Fade>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Fade
              key={service.title}
              cascade
              damping={0.1}
              triggerOnce
              className="h-full"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="h-full relative overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-70">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/30 dark:bg-blue-900/10 rounded-full -mr-20 -mt-20" />

                  <CardHeader className="flex flex-col items-center pt-6 pb-2 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full mb-3"
                    >
                      <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-start px-5 pb-5 relative z-10">
                    <p className="mb-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {service.description}
                    </p>
                    <ul className="mb-4 text-left text-xs space-y-1 text-gray-700 dark:text-gray-300">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </Fade>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;

