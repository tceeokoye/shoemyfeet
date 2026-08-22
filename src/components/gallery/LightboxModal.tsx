"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon, CalendarIcon, Share2Icon, DownloadIcon, ZoomInIcon } from "@/components/ui/Icons";
import { MediaItem } from "./galleryData";

interface LightboxModalProps {
  photos: MediaItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({ photos, currentIndex, onClose, onNavigate }: LightboxModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const photo = currentIndex !== null ? photos[currentIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, photos]);

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
      setIsZoomed(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [currentIndex]);

  const handlePrev = () => {
    if (currentIndex !== null && photos.length > 0) {
      const prevIdx = (currentIndex - 1 + photos.length) % photos.length;
      onNavigate(prevIdx);
    }
  };

  const handleNext = () => {
    if (currentIndex !== null && photos.length > 0) {
      const nextIdx = (currentIndex + 1) % photos.length;
      onNavigate(nextIdx);
    }
  };

  if (currentIndex === null || !photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Top Controls Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-30 pointer-events-auto">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#f97316] text-white text-xs font-heading font-bold shadow-md">
              {currentIndex + 1} / {photos.length}
            </span>
            <span className="text-white/80 font-body text-xs hidden sm:inline-block">
              {photo.event}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              title="Toggle Zoom"
              aria-label="Toggle zoom"
            >
              <ZoomInIcon size={18} />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-warm-orange transition-all hover:scale-110"
              aria-label="Close Lightbox"
            >
              <XIcon size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 z-30 backdrop-blur-md"
              aria-label="Previous photo"
            >
              <ChevronLeftIcon size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 z-30 backdrop-blur-md"
              aria-label="Next photo"
            >
              <ChevronRightIcon size={24} />
            </button>
          </>
        )}

        {/* Center Image Container */}
        <motion.div
          key={photo.id}
          className="relative w-full max-w-5xl h-[70vh] sm:h-[78vh] flex items-center justify-center pointer-events-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: isZoomed ? 1.25 : 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 24, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={photo.image}
            alt={photo.title}
            fill
            priority
            className="object-contain rounded-2xl transition-transform duration-300 drop-shadow-2xl"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>

        {/* Bottom Details Caption Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-[#2563eb] z-30 pointer-events-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 max-w-6xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-2xl">
            <h3 className="font-heading font-bold text-white text-lg sm:text-2xl mb-1">
              {photo.title}
            </h3>
            <p className="font-body text-blue-100/90 text-xs sm:text-sm leading-relaxed mb-2">
              {photo.caption}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-blue-200 font-body">
              <span className="flex items-center gap-1">
                <MapPinIcon size={14} className="text-warm-orange" />
                {photo.location}
              </span>
              <span className="flex items-center gap-1">
                <CalendarIcon size={14} className="text-hope-yellow" />
                {photo.date}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={photo.image}
              download={`shoe-my-feet-${photo.id}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-body text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <DownloadIcon size={14} />
              <span>Save</span>
            </a>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: photo.title,
                    text: photo.caption,
                    url: window.location.href,
                  });
                }
              }}
              className="px-4 py-2 rounded-full bg-[#f97316] text-white font-body text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <Share2Icon size={14} />
              <span>Share</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
