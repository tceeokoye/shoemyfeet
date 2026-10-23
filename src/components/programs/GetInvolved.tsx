"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { HeartIcon, ArrowRightIcon, UsersIcon, HeartHandshakeIcon, PackageIcon } from "@/components/ui/Icons";

const actions = [
  {
    icon: <PackageIcon size={32} className="text-[#1A3A6B]" />,
    title: "Donate Shoes",
    desc: "Help provide quality footwear to children who walk to school barefoot or in worn-out shoes.",
    cta: "Donate Shoes",
    href: "/donate",
    color: "bg-slate-50",
    border: "border-slate-100",
    iconBg: "bg-orange-100",
    btnClass: "btn-secondary",
  },
  {
    icon: <HeartIcon size={32} className="text-[#1A3A6B]" />,
    title: "Make a Financial Donation",
    desc: "Your contribution funds transport, logistics, outreach operations, and shoe procurement.",
    cta: "Donate Now",
    href: "/donate",
    color: "bg-[#F3F4F6]",
    border: "border-orange-100",
    btnClass: "btn-primary",
  },
  {
    icon: <UsersIcon size={32} className="text-emerald-600" />,
    title: "Volunteer With Us",
    desc: "Join outreach events, help sort donations, or assist at distribution days across Nigeria.",
    cta: "Join as Volunteer",
    href: "/volunteer",
    color: "bg-emerald-50",
    btnClass: "btn-secondary",
  },
  {
    icon: <HeartHandshakeIcon size={32} className="text-purple-600" />,
    title: "Become a Partner",
    desc: "Collaborate as a school, organization, business, church, or NGO to expand our reach and multiply impact.",
    cta: "Partner With Us",
    href: "/contact",
    btnClass: "btn-secondary",
  },
];

export default function GetInvolved() {
  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-bold border border-orange-200 mb-4"
          >
            Get Involved
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            Four Ways to <span className="text-[#1A3A6B]">Make a Difference</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Whether you give shoes, money, time, or a partnership — every contribution moves a child closer to their potential.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {actions.map((action) => (
            <motion.div
              key={action.title}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { type: "spring" as const, stiffness: 300, damping: 22 } }}
              className={`group action.color border ${action.border} rounded-2xl p-7 flex flex-col hover:shadow-2xl transition-all duration-400`}
            >
              <div className={`w-16 h-16 ${action.iconBg}  flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {action.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-[#111827] mb-3">{action.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6 flex-1">{action.desc}</p>
              <Link
                href={action.href}
                className={`${action.btnClass} group inline-flex items-center justify-center gap-2 text-sm py-2.5 px-5`}
              >
                <span>{action.cta}</span>
                <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
