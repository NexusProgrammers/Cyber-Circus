"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import NoPositions from "./NoPosition";
import OpenPosition from "./OpenPosition";
import {
  Award,
  Briefcase,
  Globe2,
  Handshake,
  Laptop2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import type { Position } from "@/types/career";

type Stat = {
  label: string;
  value: string;
  description: string;
};

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type CultureHighlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type HiringStage = {
  step: string;
  title: string;
  description: string;
};

type CareerOpportunitiesProps = {
  showOpenPositions: boolean;
  positions: Position[];
};

const stats: Stat[] = [
  {
    label: "Global Engineering Team",
    value: "60+",
    description: "Builders spanning 5 time zones delivering around-the-clock momentum.",
  },
  {
    label: "Employee Retention",
    value: "96%",
    description: "A culture rooted in growth, mentorship, and long-term partnerships.",
  },
  {
    label: "Avg. Tenure",
    value: "4.8 yrs",
    description: "Teams that stay together ship faster and own outcomes end-to-end.",
  },
  {
    label: "Project NPS",
    value: "72",
    description: "Consistently high client satisfaction across enterprise engagements.",
  },
];

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: "Career Acceleration",
    description:
      "Quarterly growth plans, dedicated mentors, and a learning budget for certifications, conferences, and leadership programs.",
  },
  {
    icon: Users,
    title: "World-Class Peers",
    description:
      "Collaborate with senior architects, strategists, and designers on mission-critical digital platforms.",
  },
  {
    icon: Award,
    title: "Premium Benefits",
    description:
      "Remote-first flexibility, competitive packages, private health coverage, wellness stipends, and home office setup.",
  },
  {
    icon: Briefcase,
    title: "Impact at Scale",
    description:
      "Deliver enterprise-grade products for Fortune 500 brands, scale-ups, and category-defining ventures.",
  },
  {
    icon: ShieldCheck,
    title: "Stable Delivery Pods",
    description:
      "Cross-functional squads that stay intact, own their roadmap, and operate with high autonomy.",
  },
  {
    icon: Laptop2,
    title: "Modern Tooling",
    description: "Ship with cloud-native stacks, design systems, and AI-enabled workflows that remove friction.",
  },
];

const cultureHighlights: CultureHighlight[] = [
  {
    icon: Sparkles,
    title: "Craft with Intent",
    description: "We favour thoughtful architecture, measurable outcomes, and code reviews that elevate the entire team.",
  },
  {
    icon: Globe2,
    title: "Remote, Not Distant",
    description: "Asynchronous-first processes, overlapping core hours, and in-person summits for deep collaboration.",
  },
  {
    icon: Target,
    title: "Ownership Mindset",
    description: "Engineers lead discovery, roadmap conversations, and performance benchmarks alongside product partners.",
  },
  {
    icon: Handshake,
    title: "Transparency Always",
    description: "Quarterly business reviews, open financials, and honest feedback loops keep everyone aligned.",
  },
];

const hiringProcess: HiringStage[] = [
  {
    step: "01",
    title: "Intro Conversation",
    description: "30-minute call with our talent partners to understand your goals, experience, and passions.",
  },
  {
    step: "02",
    title: "Technical Deep Dive",
    description:
      "Collaborative session with senior engineers exploring architecture decisions, trade-offs, and real-world scenarios.",
  },
  {
    step: "03",
    title: "Team Collaboration",
    description: "Pairing session with product and design to simulate how our delivery pods solve business challenges.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    description:
      "Receive a tailored offer, choose your gear setup, and join a squad with a dedicated onboarding mentor.",
  },
];

const CareerOpportunities: React.FC<CareerOpportunitiesProps> = ({ showOpenPositions, positions }) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <section className="relative overflow-hidden rounded-3xl border border-blue-100 dark:border-blue-900/40 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-blue-950 dark:via-gray-950 dark:to-indigo-950 px-8 py-14 sm:px-12 lg:px-16">
          <div className="absolute inset-y-0 right-10 hidden lg:block pointer-events-none">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent" />
          </div>
          <Fade cascade damping={0.12} triggerOnce>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 dark:border-blue-800/60 bg-white/60 dark:bg-blue-900/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700 dark:text-blue-300">
                Careers
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900 dark:text-white">
                Build the Platforms that Power{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  Enterprise Innovation
                </span>
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                We operate as product-minded engineers embedded in elite delivery pods. Join a team where technical mastery, thoughtful design, and business outcomes align to deliver measurable impact for global enterprises.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Button
                  asChild
                  className="w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-5 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="mailto:careers@cybercircus.com">Send Your Portfolio</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto rounded-full border-2 border-blue-500/60 px-8 py-5 text-base font-semibold text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <a href="/contact">Talk with Talent Partner</a>
                </Button>
              </div>
            </div>
          </Fade>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-2xl border border-blue-100/80 dark:border-blue-900/60 bg-white/70 dark:bg-slate-900/60 p-6 backdrop-blur"
              >
                <p className="text-3xl font-semibold text-blue-700 dark:text-blue-300">{item.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Fade cascade damping={0.1} triggerOnce>
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Where Craftspeople Thrive</h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Cyber Circus teams lead complex, multi-year transformations while keeping a startup pace. Expect deep partnership with clients, autonomy in delivery pods, and the space to innovate with emerging technologies.
            </p>
          </div>
        </Fade>

        {showOpenPositions ? <OpenPosition positions={positions} /> : <NoPositions />}

        <section className="mt-24 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-10 shadow-xl shadow-blue-500/5">
          <Fade cascade damping={0.08} triggerOnce>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Benefits Designed for Deep Work</h3>
                <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
                  We invest in the environment, tooling, and support systems that help engineers produce their best work—without burning out.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950/30 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200/80 dark:hover:border-blue-800/60"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="relative mt-6 text-lg font-semibold text-slate-900 dark:text-white">{benefit.title}</h4>
                    <p className="relative mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </Fade>
        </section>

        <section className="mt-24">
          <Fade cascade damping={0.08} triggerOnce>
            <div className="grid gap-6 lg:grid-cols-2">
              {cultureHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-8 py-10 shadow-lg shadow-indigo-500/5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-300">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Fade>
        </section>

        <section className="mt-24">
          <Fade cascade damping={0.08} triggerOnce>
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 px-8 py-12 sm:px-12 sm:py-16 text-white shadow-[0_40px_90px_-45px_rgba(30,64,175,0.75)]">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-semibold">How We Hire Engineering Leaders</h3>
                <p className="mt-3 text-base sm:text-lg text-white/70 leading-relaxed">
                  Our hiring journey mirrors how we work—collaborative, transparent, and anchored in real-world problem solving. Meet the people you’ll build with and get a feel for our delivery rhythm before day one.
                </p>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {hiringProcess.map((stage) => (
                  <div key={stage.title} className="flex gap-6">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 font-semibold text-lg">
                      {stage.step}
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold">{stage.title}</h4>
                      <p className="mt-2 text-sm text-white/75 leading-relaxed">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </section>

        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-12 sm:px-12 sm:py-16 text-white"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_60%)]" />
            <div className="relative max-w-3xl">
              <h3 className="text-3xl font-semibold sm:text-4xl">Ready to design the future of enterprise software?</h3>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                Share your portfolio, GitHub, or the toughest problem you’ve cracked. We’ll align you with a squad where your strengths create outsized impact.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="w-full sm:w-auto rounded-full bg-white px-7 py-4 text-base font-semibold text-blue-700 hover:text-blue-800"
                >
                  <a href="mailto:careers@cybercircus.com?subject=Joining%20Cyber%20Circus">Share Your Story</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto rounded-full text-black dark:text-white border-2 border-white/80 px-7 py-4 text-base font-semibold hover:bg-white/10"
                >
                  <Link href="/portfolio">Explore Our Work</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default CareerOpportunities;

