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

export default function GalleryPageClient() {
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<FeaturedMoment | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadDefaultType, setUploadDefaultType] = useState<"photo" | "video">("photo");

  const photosList = ALL_MEDIA_ITEMS.filter((m) => m.type === "photo");

  const handleOpenPhoto = (_item: MediaItem, index: number) => {
    setPhotoIndex(index);
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
        {/* 1. Hero Section */}
        <GalleryHero />

        {/* 2. Gallery Statistics Counter */}
        <GalleryStats />

        {/* 3. Featured Video Documentary Spotlight */}
        <FeaturedVideoSection onPlayVideo={handleOpenVideo} />

        {/* 4. Media Filters & Main Interactive Grid */}
        <MediaGrid
          onSelectPhoto={handleOpenPhoto}
          onSelectVideo={handleOpenVideo}
        />

        {/* 5. Featured Moments & Event Albums */}
        <FeaturedMoments onOpenAlbum={handleOpenAlbum} />

        {/* 6. Before & After Transformations */}
        <BeforeAfterTransformations onPlayVideo={handleOpenVideo} />

        {/* 7. Chronological Event Timeline */}
        <EventTimeline onPlayVideo={handleOpenVideo} />

        {/* 8. Community Voices Testimonials */}
        <CommunityVoices onPlayVideo={handleOpenVideo} />

        {/* 9. Searchable Media Archive */}
        <MediaArchive
          onSelectPhoto={handleOpenPhoto}
          onSelectVideo={handleOpenVideo}
        />

        {/* 10. Share Your Story CTA */}
        <ShareYourStory onOpenUpload={handleOpenUpload} />

        {/* 11. Final Call To Action */}
        <GalleryCTA />
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
