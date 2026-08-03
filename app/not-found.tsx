"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden px-4">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 dot-grid-base opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-aura-1" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Floating icon */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 p-4 bg-surface/50 border border-border backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(204,255,0,0.15)]"
        >
          <Terminal className="w-10 h-10 text-accent" />
        </motion.div>

        {/* 404 Glitch-like Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-stone to-muted mb-4"
        >
          404
        </motion.h1>

        {/* Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-2xl font-semibold text-stone mb-2">
            System Fault: Page not found
          </h2>
          <p className="text-muted-foreground mb-8">
            The endpoint you requested is offline or doesn't exist. Let's get you back to the main system.
          </p>

          {/* Action Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary-foreground font-semibold hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Root
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
