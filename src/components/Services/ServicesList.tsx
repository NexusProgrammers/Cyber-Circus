"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import {
  Code,
  Smartphone,
  ServerCog,
  Blocks,
  Paintbrush,
  CheckSquare,
  BarChart3,
  Database,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: Code,
    title: "Enterprise Web Development",
    description:
      "We build web applications that actually work—fast, secure, and designed to scale with your business. Whether you need a simple dashboard or a complex enterprise platform, we've got you covered.",
    features: ["React/Next.js", "Node.js/Express", "AWS/Azure deployment"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Create mobile apps that users actually want to use. We build for both iOS and Android, ensuring your app feels native, performs well, and integrates seamlessly with your existing systems.",
    features: ["React Native", "Swift/Kotlin", "Seamless API integration"],
  },
  {
    icon: ServerCog,
    title: "Cloud Architecture & DevOps",
    description:
      "Modernize your infrastructure and automate your deployments. We'll help you move to the cloud, set up CI/CD pipelines, and build systems that can handle whatever you throw at them.",
    features: ["Docker/Kubernetes", "CI/CD pipelines", "Cloud architecture"],
  },
  {
    icon: Blocks,
    title: "Digital Transformation Consulting",
    description:
      "Sometimes you need more than code—you need a plan. We help businesses figure out what technology they actually need, how to get there, and what it means for their operations.",
    features: ["Enterprise architecture", "Legacy modernization", "Process optimization"],
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design & User Experience",
    description:
      "Great software needs great design. We create interfaces that look good, feel intuitive, and make sense to the people who use them every day. Accessibility and usability aren't optional here.",
    features: ["Figma prototyping", "Design systems", "Accessibility focus"],
  },
  {
    icon: CheckSquare,
    title: "Quality Assurance & Testing",
    description:
      "We test everything—not just to make sure it works, but to make sure it works well. Automated testing, performance checks, and security audits are all part of the package.",
    features: ["Automated testing", "Performance testing", "Security audits"],
  },
  {
    icon: BarChart3,
    title: "Data Engineering & Analytics",
    description:
      "Turn your data into something useful. We build pipelines, warehouses, and analytics platforms that help you understand what's happening in your business and make better decisions.",
    features: ["Data pipelines", "Analytics platforms", "Business intelligence"],
  },
  {
    icon: Database,
    title: "Enterprise Integration Services",
    description:
      "Connect the dots between your systems. We build APIs and integration platforms that let all your tools talk to each other, so your team doesn't have to jump between a dozen different apps.",
    features: ["API development", "Microservices", "System integration"],
  },
];

const ServicesList: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade cascade damping={0.1} triggerOnce>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Comprehensive Software Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We handle everything from planning and design to development, testing, and deployment. No matter what you're building, we've got the experience and expertise to make it happen—and make it work well.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="ghost" className="w-full justify-start group mt-auto">
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

