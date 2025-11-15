"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaBars } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";

type NavLink = {
  href: string;
  label: string;
};

const navigationLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/career", label: "Careers" },
];

const Header: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto max-w-7xl flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          prefetch={true}
          aria-label="Cyber Circus Home"
        >
          <Image
            src="/transparnt-logo.png"
            alt="Cyber Circus Logo"
            width={50}
            height={50}
            className="h-10 w-10 sm:h-12 sm:w-12"
            priority
          />
          <span className="hidden sm:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Cyber Circus
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg px-6 py-2.5 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/contact">Get Started</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                <BsSunFill className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-700 dark:text-gray-300" />
                <BsMoonFill className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-700 dark:text-gray-300" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg md:hidden border border-gray-200 dark:border-gray-700"
                aria-label="Toggle navigation menu"
              >
                <FaBars className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 border-b border-gray-200 dark:border-gray-700"
                    prefetch={true}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  variant="default"
                  className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full"
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

