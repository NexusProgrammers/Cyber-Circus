"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  image?: string;
};

type RatingStarsProps = {
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Thornton",
    role: "CTO, Nexus Technologies",
    rating: 5,
    text: "Cyber Circus delivered our enterprise application ahead of schedule. Their attention to detail and technical expertise far exceeded our expectations. They've become our trusted technology partner.",
    image: "/review_one.jpg",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Director of Operations, InnovateCorp",
    rating: 5,
    text: "Working with Cyber Circus transformed our business processes. Their custom software solution increased our operational efficiency by 35% and dramatically improved our customer experience.",
    image: "/review_two.jpg",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Founder, TechStart Solutions",
    rating: 5,
    text: "As a startup founder, I needed a development team that understood my vision. Cyber Circus not only built an exceptional product but also provided valuable insights that improved our business model.",
    image: "/review_three.jpg",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "VP of Digital, Global Retail Inc",
    rating: 5,
    text: "Our e-commerce platform needed a complete overhaul. Cyber Circus delivered a scalable, secure solution that increased our conversion rates by 28% and provided a seamless user experience.",
    image: "/review_four.jpg",
  },
];

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <div className="flex justify-center text-yellow-500 my-3">
      {Array.from({ length: rating }).map((_, index) => (
        <FaStar key={`star-${index}`} className="w-4 h-4 md:w-5 md:h-5" />
      ))}
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-900 dark:from-blue-500 dark:to-indigo-400 inline-block">
            Client Success Stories
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us—real projects, real results, real partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Fade
              key={testimonial.id}
              cascade
              damping={0.1}
              triggerOnce
              className="h-full"
            >
              <Card className="h-full p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-300 dark:hover:border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-200 dark:border-blue-700">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 56px, 64px"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <LuUsers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <FaQuoteLeft className="text-blue-100 dark:text-blue-900 mb-2 w-8 h-8" />

                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4 flex-grow">
                  {testimonial.text}
                </p>

                <RatingStars rating={testimonial.rating} />
              </Card>
            </Fade>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-blue-700 dark:text-blue-400 font-medium mb-4">
            Join industry leaders who trust us with their digital transformation
          </p>
          <button
            type="button"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

