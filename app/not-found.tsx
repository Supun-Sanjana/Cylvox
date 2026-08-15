"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/placeholders/squish_dune_lost_404.jpg" 
          alt="Lost in the dunes" 
          fill 
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay for text readability and cinematic blur */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Minimal geometric accent */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-10 w-2 h-2 bg-primary rotate-45 shadow-[0_0_20px_rgba(204,255,0,0.6)]"
        />

        {/* 404 Glitch-like Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-9xl font-display tracking-tighter text-white mb-4 drop-shadow-lg"
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
          <h2 className="text-3xl font-display font-semibold text-white mb-3 drop-shadow-md">
            Signal Lost
          </h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            The endpoint you requested is offline or doesn't exist. Let's get you back to the main system.
          </p>

          {/* Action Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/20"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Root
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
