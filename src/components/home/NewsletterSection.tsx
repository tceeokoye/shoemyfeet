"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon, MailIcon, CheckCircle2Icon } from "@/components/ui/Icons";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          className="relative bg-[#2563eb] rounded-3xl p-8 sm:p-14 text-center text-white overflow-hidden shadow-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Background Ambient Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10 max-w-xl mx-auto">
            <motion.div variants={fadeUp} className="w-14 h-14 rounded-2xl bg-[#2563eb] flex items-center justify-center text-2xl mx-auto mb-6 shadow-lg">
              ✉️
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
              Stay Connected to <span className="text-warm-orange">Our Mission</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-blue-200 font-body text-sm sm:text-base mb-8 leading-relaxed">
              Receive quarterly impact updates, heartwarming outreach stories, and announcements directly in your inbox.
            </motion.p>

            {subscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-heading font-bold text-lg mb-1">
                  <CheckCircle2Icon size={20} />
                  <span>Thank you for subscribing!</span>
                </div>
                <p className="text-xs text-blue-200 font-body">
                  Welcome to the Shoe My Feet Foundation family.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="flex-1 relative">
                  <MailIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white placeholder-blue-300 text-sm font-body focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-orange py-3.5 px-7 justify-center rounded-full text-sm font-bold whitespace-nowrap shadow-lg font-body"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Subscribe</span>
                  <ArrowRightIcon size={15} />
                </motion.button>
              </motion.form>
            )}

            <motion.p variants={fadeUp} className="text-[11px] text-blue-300/80 font-body mt-4">
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
