"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRight, Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-black/15 animate-blob-slow" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-orange-500/15 animate-blob" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundColor: "#f97316",
            backgroundSize: "48px 48px"
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="mb-4">
            <span className="text-4xl">✉️</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Connected to{" "}
            <span className="text-warm-orange">Our Mission</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-neutral-300 font-body mb-8 leading-relaxed">
            Get impact reports, outreach stories, volunteer opportunities, and updates
            on how your support is changing children&apos;s lives across Nigeria.
          </motion.p>

          {subscribed ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass rounded-2xl px-8 py-6 border border-white/20 text-center"
            >
              <span className="text-4xl mb-3 block">🎉</span>
              <p className="font-heading font-bold text-white text-xl">Thank you!</p>
              <p className="text-neutral-300 font-body text-sm mt-2">
                You&apos;re now part of our community. Welcome to the Shoe My Feet family!
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-300 font-body focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                className="btn-orange py-4 px-6 justify-center rounded-2xl whitespace-nowrap"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <ArrowRight size={16} />
              </motion.button>
            </motion.form>
          )}

          <motion.p variants={fadeUp} className="text-orange-400 font-body text-xs mt-4">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
