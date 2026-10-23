"use client";

import { useState } from "react";
import GalleryHero from "./GalleryHero";
import GalleryStats from "./GalleryStats";
import FeaturedVideoSection from "./FeaturedVideoSection";
import MediaGrid from "./MediaGrid";
import FeaturedMoments from "./FeaturedMoments";
import BeforeAfterTransformations from "./BeforeAfterTransformations";
import EventTimeline from "./EventTimeline";
import CommunityVoices from "./CommunityVoices";
import MediaArchive from "./MediaArchive";
import ShareYourStory from "./ShareYourStory";
import GalleryCTA from "./GalleryCTA";

import VideoModal from "./VideoModal";
import LightboxModal from "./LightboxModal";
import UploadModal from "./UploadModal";
import AlbumModal from "./AlbumModal";

import { ALL_MEDIA_ITEMS, FeaturedMoment, MediaItem } from "./galleryData";

type GalleryCollection = "photos" | "videos" | "events";

const collectionContent: Record<GalleryCollection, { title: string; description: string }> = {
  photos: {
    title: "Photographs from the field",
    description: "Browse moments from shoe distributions, school visits, and community life.",
  },
  videos: {
    title: "Films and community voices",
    description: "Watch outreach documentaries and hear stories from the people behind the work.",
  },
  events: {
    title: "Outreach events and albums",
    description: "Explore event albums and trace our work across communities over time.",
  },
};

export default function GalleryPageClient({ collection }: { collection: GalleryCollection }) {
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<FeaturedMoment | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadDefaultType, setUploadDefaultType] = useState<"photo" | "video">("photo");

  const photosList = ALL_MEDIA_ITEMS.filter((m) => m.type === "photo");

  const handleOpenPhoto = (item: MediaItem) => {
    const index = photosList.findIndex((photo) => photo.id === item.id);
    setPhotoIndex(index >= 0 ? index : null);
  };

  const handleOpenVideo = (video: MediaItem) => {
    setSelectedVideo(video);
  };

  const handleOpenAlbum = (album: FeaturedMoment) => {
    setSelectedAlbum(album);
  };

  const handleOpenUpload = (type: "photo" | "video") => {
    setUploadDefaultType(type);
    setUploadModalOpen(true);
  };

  return (
    <>
      <main className="[overflow-x:clip] min-h-screen bg-white">
        <section className="bg-[#FFFFFF] px-4 pb-10 pt-32 sm:px-6 sm:pb-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <a href="/gallery" className="mb-5 inline-block text-sm font-medium text-[#142E56] hover:underline">
              ← Gallery overview
            </a>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">Shoe My Feet Foundation · Gallery</p>
            <h1 className="font-heading text-4xl font-medium leading-tight text-[#111827] sm:text-5xl">
              {collectionContent[collection].title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#696558] sm:text-lg">
              {collectionContent[collection].description}
            </p>
          </div>
        </section>

        {collection === "photos" && (
          <>
            <MediaGrid onSelectPhoto={handleOpenPhoto} onSelectVideo={handleOpenVideo} initialTab="Photos" />
            <BeforeAfterTransformations onPlayVideo={handleOpenVideo} />
            <MediaArchive onSelectPhoto={handleOpenPhoto} onSelectVideo={handleOpenVideo} />
            <ShareYourStory onOpenUpload={handleOpenUpload} />
          </>
        )}

        {collection === "videos" && (
          <>
            <FeaturedVideoSection onPlayVideo={handleOpenVideo} />
            <MediaGrid onSelectPhoto={handleOpenPhoto} onSelectVideo={handleOpenVideo} initialTab="Videos" />
            <CommunityVoices onPlayVideo={handleOpenVideo} />
            <ShareYourStory onOpenUpload={handleOpenUpload} />
          </>
        )}

        {collection === "events" && (
          <>
            <GalleryStats />
            <FeaturedMoments onOpenAlbum={handleOpenAlbum} />
            <EventTimeline onPlayVideo={handleOpenVideo} />
            <MediaArchive onSelectPhoto={handleOpenPhoto} onSelectVideo={handleOpenVideo} />
            <GalleryCTA />
          </>
        )}
      </main>

      {/* Global Interactive Modals */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <LightboxModal
        photos={photosList}
        currentIndex={photoIndex}
        onClose={() => setPhotoIndex(null)}
        onNavigate={(idx) => setPhotoIndex(idx)}
      />

      <UploadModal
        isOpen={uploadModalOpen}
        defaultType={uploadDefaultType}
        onClose={() => setUploadModalOpen(false)}
      />

      <AlbumModal
        album={selectedAlbum}
        onClose={() => setSelectedAlbum(null)}
        onSelectMedia={(item) => {
          if (item.type === "video") {
            setSelectedVideo(item);
          } else {
            const pIdx = photosList.findIndex((p) => p.id === item.id);
            setPhotoIndex(pIdx >= 0 ? pIdx : 0);
          }
        }}
      />
    </>
  );
}
