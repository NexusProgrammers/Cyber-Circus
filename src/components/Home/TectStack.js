"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Code,
  Database,
  Server,
  MonitorSmartphone,
  Cpu,
  Settings,
  Layers,
  Globe,
  Paintbrush,
} from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
  FaShopify,
  FaWordpress,
  FaAws,
  FaDocker,
  FaAndroid,
  FaSwift,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiKubernetes,
  SiTerraform,
  SiGoland,
  SiDjango,
  SiFlutter,
  SiKeras,
  SiPytorch,
  SiTensorflow,
  SiOpenai,
  SiAdobe,
  SiFramer,
  SiWebflow,
  SiRuby,
  SiElixir,
  SiC,
  SiJavascript,
  SiReact,
  SiWix,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";

const categories = [
  { name: "All", icon: Globe },
  { name: "Front-End", icon: Code },
  { name: "Back-End", icon: Server },
  { name: "Low/No Code", icon: Layers },
  { name: "Database", icon: Database },
  { name: "DevOps", icon: Settings },
  { name: "Mobile", icon: MonitorSmartphone },
  { name: "AI & ML", icon: Cpu },
  { name: "Design", icon: Paintbrush },
];

const techStack = {
  "Front-End": [
    { icon: FaHtml5, name: "HTML", color: "#E44D26", darkColor: "#E44D26" },
    { icon: FaCss3Alt, name: "CSS", color: "#1572B6", darkColor: "#1572B6" },
    {
      icon: SiJavascript,
      name: "JavaScript",
      color: "#F7DF1E",
      darkColor: "#F7DF1E",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "#3178C6",
      darkColor: "#3178C6",
    },
    { icon: FaSass, name: "Sass", color: "#CC6699", darkColor: "#CC6699" },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "#06B6D4",
      darkColor: "#06B6D4",
    },
    {
      icon: SiBootstrap,
      name: "Bootstrap",
      color: "#7952B3",
      darkColor: "#7952B3",
    },
    { icon: FaReact, name: "React JS", color: "#61DAFB", darkColor: "#61DAFB" },
    { icon: FaVuejs, name: "Vue JS", color: "#4FC08D", darkColor: "#4FC08D" },
    {
      icon: FaAngular,
      name: "Angular",
      color: "#DD0031",
      darkColor: "#DD0031",
    },
    {
      icon: SiNextdotjs,
      name: "Next JS",
      color: "#000000",
      darkColor: "#FFFFFF",
    },
    {
      icon: SiNuxtdotjs,
      name: "Nuxt JS",
      color: "#00DC82",
      darkColor: "#00DC82",
    },
  ],
  "Back-End": [
    { icon: FaNodeJs, name: "Node.js", color: "#339933", darkColor: "#339933" },
    { icon: FaPython, name: "Python", color: "#3776AB", darkColor: "#3776AB" },
    { icon: SiDjango, name: "Django", color: "#092E20", darkColor: "#44B78B" },
    { icon: FaPhp, name: "PHP", color: "#777BB4", darkColor: "#777BB4" },
    { icon: FaJava, name: "Java", color: "#007396", darkColor: "#F89820" },
    { icon: SiGoland, name: "Golang", color: "#00ADD8", darkColor: "#00ADD8" },
    { icon: SiRuby, name: "Ruby", color: "#CC342D", darkColor: "#CC342D" },
    { icon: SiElixir, name: "Elixir", color: "#4B275F", darkColor: "#9580FF" },
    { icon: SiC, name: "C#", color: "#512BD4", darkColor: "#512BD4" },
  ],
  "Low/No Code": [
    {
      icon: FaShopify,
      name: "Shopify",
      color: "#7AB55C",
      darkColor: "#7AB55C",
    },
    {
      icon: FaWordpress,
      name: "WordPress",
      color: "#21759B",
      darkColor: "#21759B",
    },
    {
      icon: SiWix,
      name: "Wix",
      color: "808080",
      darkColor: "#696969",
    },
  ],
  Database: [
    {
      icon: SiFirebase,
      name: "Firebase",
      color: "#FFCA28",
      darkColor: "#FFCA28",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "#47A248",
      darkColor: "#47A248",
    },
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      color: "#4169E1",
      darkColor: "#4169E1",
    },
    { icon: SiMysql, name: "MySQL", color: "#4479A1", darkColor: "#4479A1" },
  ],
  DevOps: [
    { icon: FaAws, name: "AWS", color: "#232F3E", darkColor: "#FF9900" },
    {
      icon: SiKubernetes,
      name: "Kubernetes",
      color: "#326CE5",
      darkColor: "#326CE5",
    },
    { icon: FaDocker, name: "Docker", color: "#2496ED", darkColor: "#2496ED" },
    {
      icon: SiTerraform,
      name: "Terraform",
      color: "#7B42BC",
      darkColor: "#7B42BC",
    },
  ],
  Mobile: [
    {
      icon: FaAndroid,
      name: "Android",
      color: "#3DDC84",
      darkColor: "#3DDC84",
    },
    { icon: FaSwift, name: "Swift", color: "#F05138", darkColor: "#F05138" },
    {
      icon: SiFlutter,
      name: "Flutter",
      color: "#02569B",
      darkColor: "#4187ce",
    },
    {
      icon: SiReact,
      name: "React Native",
      color: "#61DBFB",
      darkColor: "#45D1FD",
    },
  ],
  "AI & ML": [
    {
      icon: SiTensorflow,
      name: "TensorFlow",
      color: "#FF6F00",
      darkColor: "#FF6F00",
    },
    { icon: SiKeras, name: "Keras", color: "#D00000", darkColor: "#D00000" },
    {
      icon: SiPytorch,
      name: "PyTorch",
      color: "#EE4C2C",
      darkColor: "#EE4C2C",
    },
    { icon: SiOpenai, name: "OpenAI", color: "#412991", darkColor: "#10A37F" },
  ],
  Design: [
    { icon: FaFigma, name: "Figma", color: "#F24E1E", darkColor: "#F24E1E" },
    { icon: SiAdobe, name: "Adobe", color: "#FF0000", darkColor: "#FF0000" },
    { icon: SiFramer, name: "Framer", color: "#0055FF", darkColor: "#0055FF" },
    {
      icon: SiWebflow,
      name: "Webflow",
      color: "#4353FF",
      darkColor: "#4353FF",
    },
  ],
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      if (typeof window !== "undefined") {
        const isDark =
          document.documentElement.classList.contains("dark") ||
          document.documentElement.getAttribute("data-theme") === "dark";
        setIsDarkMode(isDark);
      }
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const getAllTechs = () => {
    const allTechs = [];
    Object.values(techStack).forEach((category) => {
      category.forEach((tech) => {
        allTechs.push(tech);
      });
    });
    return allTechs;
  };

  const filteredTechs =
    activeTab === "All" ? getAllTechs() : techStack[activeTab] || [];

  return (
    <div className="text-center w-full py-20">
      <Fade cascade damping={0.1} triggerOnce>
        <h1 className="text-5xl text-center sm:text-6xl font-semibold leading-tight bg-clip-text h-16 text-transparent bg-gradient-to-r from-blue-600 to-purple-900 border-l-4 border-blue-600 pl-3 inline-block">
          Enterprise Technology Stack
        </h1>
        <p className="text-base sm:text-lg mt-4 font-medium">
          Cutting-Edge Technologies Powering Enterprise Solutions
        </p>
      </Fade>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full container mx-auto px-4 mt-12"
      >
        <Fade cascade damping={0.1} triggerOnce>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.name}
                onClick={() => setActiveTab(category.name)}
                variant={activeTab === category.name ? "default" : "outline"}
                className={cn(
                  "px-10 py-6 text-sm font-medium rounded-full transition-all flex items-center gap-2",
                  activeTab === category.name
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700"
                )}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </Fade>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filteredTechs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Fade
                key={`${tech.name}-${index}`}
                cascade
                damping={0.1}
                triggerOnce
              >
                <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center justify-center h-20 w-20 p-4 rounded-lg mb-2 bg-gray-50 dark:bg-gray-700">
                    <Icon
                      className="w-12 h-12"
                      style={{
                        color: isDarkMode ? tech.darkColor : tech.color,
                      }}
                    />
                  </div>
                  <p className="text-sm font-medium text-center">{tech.name}</p>
                </div>
              </Fade>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
