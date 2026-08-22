"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { CheckIcon, ArrowRightIcon, MailIcon } from "@/components/ui/Icons";

export default function ContactNewsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 1200);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Newsletter invitation">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#2563eb] rounded-4xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Background Ambient Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 bg-white blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 bg-amber-300 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-4"
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-xs">
                📬 Monthly Impact Digest
              </motion.span>

              <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Stay Connected With <span className="underline decoration-white/40">Our Mission</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-white/90 font-body text-base sm:text-lg leading-relaxed">
                Subscribe to receive inspiring stories, outreach updates, volunteer opportunities, and upcoming events delivered straight to your inbox.
              </motion.p>
            </motion.div>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                  <input
                    type="text"
                    placeholder="Your Name (e.g. Ada)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3.5 rounded-2xl bg-white/90 text-gray-900 font-body text-sm placeholder-gray-500 focus:outline-none focus:bg-white flex-1"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3.5 rounded-2xl bg-white/90 text-gray-900 font-body text-sm placeholder-gray-500 focus:outline-none focus:bg-white flex-1"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3.5 rounded-2xl bg-[#1e40af] text-white font-bold font-body text-sm hover:bg-[#2563eb] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRightIcon size={14} />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-white/70 font-body">🔒 Zero spam. Unsubscribe at any time with 1 click.</p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 text-center space-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-white text-forest-green flex items-center justify-center mx-auto text-2xl shadow-lg">
                  <CheckIcon size={24} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">You&apos;re Subscribed!</h3>
                <p className="text-xs text-white/90 font-body">
                  Thank you, <strong>{name || "friend"}</strong>! We&apos;ve sent a welcome email to <strong>{email}</strong>.
                </p>
              </motion.div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
