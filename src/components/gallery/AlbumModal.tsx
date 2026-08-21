"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XIcon, MapPinIcon, CalendarIcon, PlayIcon, ZoomInIcon } from "@/components/ui/Icons";
import { FeaturedMoment, MediaItem } from "./galleryData";

interface AlbumModalProps {
  album: FeaturedMoment | null;
  onClose: () => void;
  onSelectMedia: (item: MediaItem) => void;
}

export default function AlbumModal({ album, onClose, onSelectMedia }: AlbumModalProps) {
  if (!album) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-5xl bg-[#0f2347] rounded-3xl overflow-hidden shadow-2xl border border-white/15 flex flex-col max-h-[88vh]"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Album Cover Header */}
          <div className="relative h-48 sm:h-64 w-full">
            <Image
              src={album.coverImage}
              alt={album.title}
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-[#1a3a6b]" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white hover:bg-warm-orange transition-colors z-20"
              aria-label="Close Album"
            >
              <XIcon size={20} />
            </button>

            <div className="absolute bottom-4 left-6 right-6 z-10 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-3 py-1 rounded-full bg-warm-orange text-white text-xs font-bold font-heading">
                  ALBUM PREVIEW
                </span>
                <span className="flex items-center gap-1 text-xs text-blue-200 font-body">
                  <MapPinIcon size={12} className="text-warm-orange" />
                  {album.location}
                </span>
                <span className="flex items-center gap-1 text-xs text-blue-200 font-body">
                  <CalendarIcon size={12} className="text-hope-yellow" />
                  {album.date}
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
                {album.title}
              </h2>
              <p className="font-body text-xs sm:text-sm text-blue-100/90 max-w-3xl line-clamp-2 mt-1">
                {album.summary}
              </p>
            </div>
          </div>

          {/* Album Media Grid */}
          <div className="p-6 overflow-y-auto flex-1 bg-[#0d1f3c]">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Album Gallery Items ({album.albumMedia.length})</span>
              <span className="text-xs text-blue-300 font-normal">Click item to enlarge</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
              {album.albumMedia.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectMedia(item);
                  }}
                  className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-warm-orange transition-all duration-300 shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {item.type === "video" ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-warm-orange/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <PlayIcon size={16} className="ml-0.5" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center">
                        <ZoomInIcon size={16} />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#1a3a6b]">
                    <p className="text-[11px] font-heading font-semibold text-white line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
