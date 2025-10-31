"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLinkDesktop from "../components/NavLinkDesktop";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#experiences", label: "Experiences" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-6 md:mx-10 rounded-3xl backdrop-blur-md bg-background/70 shadow-lg flex items-center justify-between px-6 py-4"
    >
      {/* Logo / Name */}
      <h1 className="text-xl font-semibold text-primary">Sevalino Elfata</h1>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-row items-center space-x-8">
        <div className="flex flex-row space-x-8">
          {navItems.map((item) => (
            <NavLinkDesktop key={item.href} href={item.href}>
              {item.label}
            </NavLinkDesktop>
          ))}
        </div>
        <a
          href="#contacts"
          className="bg-primary text-background py-2 px-4 text-lg font-medium rounded-xl hover:scale-105 transition-transform"
        >
          Contacts
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-primary"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-18 left-0 right-0  rounded-3xl bg-background/90 backdrop-blur-xl shadow-xl border items-end border-white/10 flex flex-col lg:hidden h-fit overflow-hidden"
          >
                          {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-text hover:text-primary transition-colors w-full text-end pr-5 border-b border-white/10 py-5"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contacts"
              onClick={() => setIsOpen(false)}
              className="w-full  text-end bg-primary text-background py-5 px-5 text-lg font-medium transition-transform"
            >
              Contacts
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
