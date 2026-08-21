"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { MapPinIcon, ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

const landmarks = [
  { name: "Enugu State Secretariat", distance: "2 mins walk (200m)", icon: "🏛️" },
  { name: "Independence Layout Roundabout", distance: "3 mins drive (800m)", icon: "📍" },
  { name: "Nnamdi Azikiwe Stadium", distance: "5 mins drive (1.5km)", icon: "🏟️" },
  { name: "Enugu City Center", distance: "8 mins drive (2.8km)", icon: "🏙️" },
];

export default function FindUsLocation() {
  return (
    <section id="location" className="section-padding bg-white relative overflow-hidden" aria-label="Find us location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-royal-blue font-bold text-sm mb-4">
            🗺️ Our Head Office Location
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Find Us in <span className="text-royal-blue">Enugu, Nigeria</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our central headquarters is conveniently located in the heart of Enugu State. Visitors and partners are always welcome!
          </motion.p>
        </motion.div>

        {/* Location Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Container */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7 rounded-4xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200 relative min-h-[400px] bg-blue-50 flex items-center justify-center"
          >
            {/* Embedded Map / Styled Map Representation */}
            <iframe
              title="Shoe My Feet Foundation Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5516942186835!2d7.5028!3d6.4475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d463b784a1%3A0x6b4f7a3729e1d884!2sIndependence%20Layout%2C%20Enugu!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] object-cover filter contrast-[1.05]"
            />

            {/* Custom Overlay Marker Badge */}
            <div className="absolute top-4 left-4 glass rounded-2xl p-3 shadow-xl border border-white/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f97316] flex items-center justify-center text-white shadow-md">
                <MapPinIcon size={20} />
              </div>
              <div>
                <div className="font-heading font-bold text-royal-blue text-sm">Shoe My Feet HQ</div>
                <div className="text-[11px] text-gray-600 font-body">Independence Layout, Enugu</div>
              </div>
            </div>
          </motion.div>

          {/* Location Details & Directions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5 space-y-6"
          >
            <motion.div variants={fadeUp} className="bg-[#1a3a6b] p-6 rounded-3xl border border-blue-100 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-royal-blue mb-2 flex items-center gap-2">
                <MapPinIcon size={22} className="text-warm-orange" />
                Office Address
              </h3>
              <p className="text-gray-700 font-body text-base leading-relaxed mb-3">
                No. 14 Independence Layout, Plot 8,<br />
                Enugu, Enugu State, Nigeria
              </p>
              <a
                href="https://maps.google.com/?q=Independence+Layout+Enugu+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange py-3 px-6 text-sm inline-flex items-center gap-2"
              >
                <span>Get Directions on Google Maps</span>
                <ArrowRightIcon size={14} />
              </a>
            </motion.div>

            {/* Landmarks */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="font-heading font-bold text-lg text-[#1a1a2e] mb-3">Nearby Landmarks</h4>
              <div className="grid grid-cols-2 gap-3">
                {landmarks.map((l) => (
                  <div key={l.name} className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-xs font-body">
                    <div className="font-bold text-[#1a1a2e] flex items-center gap-1.5 mb-0.5">
                      <span>{l.icon}</span>
                      <span className="truncate">{l.name}</span>
                    </div>
                    <div className="text-gray-500 text-[11px]">{l.distance}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visitor Amenities */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 text-xs font-body text-gray-600">
              {["🅿️ Free Visitor Parking", "♿ Wheelchair Accessible", "☕ Guest Lounge", "📶 Visitor Wi-Fi"].map((badge) => (
                <span key={badge} className="px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 font-semibold">
                  {badge}
                </span>
              ))}
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
