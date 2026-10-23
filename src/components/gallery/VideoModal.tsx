"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, PlayIcon, PauseIcon, Volume2Icon, VolumeXIcon, MaximizeIcon, MapPinIcon, CalendarIcon } from "@/components/ui/Icons";
import { resolveRealPhoto } from "@/lib/realPhotos";
import { MediaItem } from "./galleryData";

interface VideoModalProps {
  video: MediaItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [durationText, setDurationText] = useState("00:00");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!video) return;
      if (e.key === "Escape") onClose();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === "m" || e.key === "M") toggleMute();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [video, isPlaying, isMuted]);

  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
      setIsPlaying(true);
      setProgress(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [video]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);

      const curM = Math.floor(current / 60);
      const curS = Math.floor(current % 60);
      setCurrentTime(`${curM.toString().padStart(2, "0")}:${curS.toString().padStart(2, "0")}`);

      if (!isNaN(total)) {
        const totM = Math.floor(total / 60);
        const totS = Math.floor(total % 60);
        setDurationText(`${totM.toString().padStart(2, "0")}:${totS.toString().padStart(2, "0")}`);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (newProgress / 100) * videoRef.current.duration;
      setProgress(newProgress);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  if (!video) return null;

  const isYouTube = video.videoUrl?.includes("youtube") || video.videoUrl?.includes("youtu.be");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={containerRef}
          className="relative w-full max-w-5xl bg-[#111827] rounded-2xl overflow-hidden shadow-2xl border border-white/15 flex flex-col max-h-[90vh]"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10 z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#1A3A6B] text-white text-xs font-bold font-heading">
                VIDEO
              </span>
              <div>
                <h3 className="font-heading font-bold text-white text-base sm:text-lg line-clamp-1">
                  {video.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-neutral-300 font-body">
                  <span className="flex items-center gap-1">
                    <MapPinIcon size={12} className="text-[#1A3A6B]" />
                    {video.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarIcon size={12} className="text-[#142E56]" />
                    {video.date}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Close modal"
            >
              <XIcon size={20} />
            </button>
          </div>

          {/* Video Player Area */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-80 sm:min-h-[480px]">
            {isYouTube ? (
              <iframe
                src={`${video.videoUrl}?autoplay=1&rel=0`}
                title={video.title}
                className="w-full h-full absolute inset-0 border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <video
                  ref={videoRef}
                  src={video.videoUrl || "/videos/story.mp4"}
                  poster={resolveRealPhoto(video.image) as string}
                  autoPlay
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  className="w-full h-full max-h-[70vh] object-contain"
                  onClick={togglePlay}
                />

                {/* Custom Overlay Controls for HTML5 Video */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 flex flex-col gap-2 z-20">
                  {/* Progress Slider */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#1A3A6B] hover:h-2 transition-all"
                  />

                  <div className="flex items-center justify-between text-white text-xs font-body pt-1">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-full bg-white/20 hover:bg-[#1A3A6B] transition-colors"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeXIcon size={16} /> : <Volume2Icon size={16} />}
                      </button>

                      <span className="font-mono text-xs text-neutral-300">
                        {currentTime} / {durationText || video.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={toggleFullscreen}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        aria-label="Toggle Fullscreen"
                      >
                        <MaximizeIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Description Footer */}
          <div className="px-6 py-4 bg-[#111827] border-t border-white/10 text-white">
            <p className="text-sm font-body text-neutral-200 leading-relaxed">
              {video.caption}
            </p>
            {video.beneficiaries && (
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#142E56] text-xs font-bold">
                Impact: {video.beneficiaries}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
