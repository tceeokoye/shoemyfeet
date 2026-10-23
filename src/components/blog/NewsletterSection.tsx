"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportConfig, float, floatSlow } from "@/lib/animations";
import { MailIcon, FootprintsIcon, SparklesIcon, CheckCircle2Icon, ArrowRightIcon, HeartIcon } from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      trackEvent("newsletter_signup", email, { name });
    }, 800);
  };

  return (
    <section className="my-20 relative overflow-hidden" id="newsletter-section">
      <div className="bg-[#111827] rounded-2xl p-8 sm:p-12 lg:p-16 text-white relative shadow-2xl overflow-hidden border border-white/10">
        {/* Background glow and floating footprints */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div variants={float} initial="initial" animate="animate" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <motion.div variants={floatSlow} initial="initial" animate="animate" className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#1A3A6B]/10 blur-3xl" />

          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 text-white/10 hidden sm:block"
          >
            <FootprintsIcon size={52} />
          </motion.div>
          <motion.div
            animate={{ y: [8, -8, 8], rotate: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-12 text-[#1A3A6B]/20 hidden sm:block"
          >
            <FootprintsIcon size={64} />
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <AnimatePresence mode="wait">
            {!isSubscribed ? (
              <motion.div
                key="subscribe-form"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#142E56] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xs">
                  <MailIcon size={14} className="text-[#1A3A6B]" />
                  <span>Stay Connected With Our Mission</span>
                  <SparklesIcon size={14} className="text-[#142E56] animate-pulse" />
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                  Receive Inspiring Stories in Your Inbox
                </h2>

                {/* Supporting text */}
                <p className="text-neutral-200 font-body text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                  Receive inspiring stories, outreach updates, upcoming events, and opportunities to make a difference. No spam, only real impact dispatches.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm font-body focus:outline-none focus:bg-white/20 focus:border-[#1A3A6B] transition-all"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm font-body focus:outline-none focus:bg-white/20 focus:border-[#1A3A6B] transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary py-3.5 px-8 rounded-[10px] text-sm font-bold shadow-lg hover:shadow-163D2A/30 cursor-pointer inline-flex items-center justify-center gap-2 shrink-0"
                  >
                    {isSubmitting ? (
                      <span>Joining...</span>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRightIcon size={16} />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[11px] text-orange-300 font-body mt-4">
                  We respect your privacy. Unsubscribe anytime with one click.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success-panel"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#1A3A6B] text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle2Icon size={36} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                  Welcome to the Shoe My Feet Family, {name}!
                </h3>
                <p className="text-neutral-200 font-body text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for subscribing! We&apos;ve sent a confirmation email to <span className="font-bold text-[#142E56]">{email}</span>. Look out for our next edition on <span className="font-bold text-white">August 15, 2026</span>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-body text-neutral-300">
                  <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                    <HeartIcon size={14} className="text-[#1A3A6B] fill-[#1A3A6B]" /> Next Newsletter: August 15, 2026
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsSubscribed(false)}
                    className="text-white hover:underline cursor-pointer font-bold"
                  >
                    Subscribe Another Email
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
