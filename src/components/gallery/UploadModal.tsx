"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, UploadIcon, CheckCircleIcon, CameraIcon, VideoIcon } from "@/components/ui/Icons";

interface UploadModalProps {
  isOpen: boolean;
  defaultType?: "photo" | "video";
  onClose: () => void;
}

export default function UploadModal({ isOpen, defaultType = "photo", onClose }: UploadModalProps) {
  const [mediaType, setMediaType] = useState<"photo" | "video">(defaultType);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [previewName, setPreviewName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setPreviewName(null);
    setTitle("");
    setEmail("");
    setEventLocation("");
    setCaption("");
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-gray-100"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
          >
            <XIcon size={18} />
          </button>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircleIcon size={36} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#f97316] mb-2">
                Thank You for Sharing!
              </h3>
              <p className="font-body text-gray-600 text-sm max-w-md mx-auto mb-6">
                Your media submission has been received. Our review team will review and publish your story to inspire thousands of supporters.
              </p>
              <button
                onClick={handleReset}
                className="btn-primary text-sm px-6 py-2.5 rounded-full"
              >
                Close & Return to Gallery
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-warm-orange-dark text-xs font-bold font-heading mb-2">
                  Share Your Story
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#1a1a2e]">
                  Upload Outreach {mediaType === "photo" ? "Photos" : "Videos"}
                </h3>
                <p className="font-body text-xs text-gray-500 mt-1">
                  Help us document every smile and moment of hope created in the field.
                </p>
              </div>

              {/* Type Switcher */}
              <div className="flex rounded-2xl bg-gray-100 p-1 mb-6">
                <button
                  type="button"
                  onClick={() => setMediaType("photo")}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold font-heading flex items-center justify-center gap-2 transition-all ${
                    mediaType === "photo" ? "bg-white text-[#f97316] shadow-sm" : "text-gray-500"
                  }`}
                >
                  <CameraIcon size={16} />
                  <span>Photo Upload</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMediaType("video")}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold font-heading flex items-center justify-center gap-2 transition-all ${
                    mediaType === "video" ? "bg-white text-[#f97316] shadow-sm" : "text-gray-500"
                  }`}
                >
                  <VideoIcon size={16} />
                  <span>Video Upload</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-body text-xs">
                {/* File Dropzone */}
                <div className="border-2 border-dashed border-gray-300 hover:border-warm-orange rounded-2xl p-6 text-center bg-gray-50 transition-colors relative cursor-pointer group">
                  <input
                    type="file"
                    accept={mediaType === "photo" ? "image/*" : "video/*"}
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    required
                  />
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-warm-orange flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <UploadIcon size={20} />
                  </div>
                  <p className="font-semibold text-gray-800 text-xs">
                    {previewName ? previewName : `Drag & Drop your ${mediaType} file here`}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Supports JPG, PNG, WEBP, MP4, MOV (Max 50MB)
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Philomena N."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-warm-orange text-xs text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. volunteer@shoemyfeet.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-warm-orange text-xs text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Outreach Event & Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kaduna School Shoe Distribution 2026"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-warm-orange text-xs text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Short Story / Caption</label>
                  <textarea
                    rows={3}
                    placeholder="Describe what happened in this moment..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-warm-orange text-xs text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full btn-orange text-xs font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Uploading Media...</span>
                  ) : (
                    <>
                      <UploadIcon size={16} />
                      <span>Submit {mediaType === "photo" ? "Photo" : "Video"} Story</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
