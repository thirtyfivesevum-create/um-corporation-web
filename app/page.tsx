"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Shield,
  Zap,
  Globe,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          U/M Corporation
        </motion.h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Infrastructure. Energy. Governance.
          <br />
          Building sovereign-grade systems for the next century.
        </p>

        <a
          href="#mission"
          className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-black font-semibold hover:bg-gray-200 transition"
        >
          Explore Our Platform <ArrowRight />
        </a>
      </section>

      {/* MISSION */}
      <section id="mission" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Mission</h2>
        <p className="text-gray-300 max-w-3xl">
          U/M Corporation designs, licenses, and deploys integrated infrastructure
          systems that unify structural engineering, renewable energy, and
          governance-grade intelligence into resilient foundations for modern
          civilization.
        </p>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Core Pillars</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-neutral-800 p-8">
              <Building2 className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Structural Systems
              </h3>
              <p className="text-gray-400">
                Advanced earth-compound foundations engineered for durability,
                scalability, and generational asset permanence.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-8">
              <Zap className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Energy Integration
              </h3>
              <p className="text-gray-400">
                Embedded microgrids, renewable generation, and on-site storage
                designed directly into the foundation layer.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-8">
              <Shield className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Governance & Security
              </h3>
              <p className="text-gray-400">
                Compliance-aware, resilient systems supporting sovereign-grade
                operational control and infrastructure intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <footer className="py-16 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="font-semibold text-lg">U/M Corporation</h4>
            <p className="text-gray-500 text-sm mt-2">
              Infrastructure for the next century.
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4" /> Global
            </span>
            <span className="flex items-center gap-2">
              <Layers className="h-4 w-4" /> Integrated
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Secure
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
