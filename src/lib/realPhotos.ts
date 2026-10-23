import type { ImageProps } from "next/image";
import distribution from "@/assets/FCR_6577.jpg";
import fitting from "@/assets/FCR_6457.jpg";
import children from "@/assets/FCR_6666.jpg";
import schoolChildren from "@/assets/FCR_6429.jpg";
import groupOutreach from "@/assets/FCR_6429.jpg";
import volunteerPortrait from "@/assets/FCR_6682.jpg";
import teamPhoto from "@/assets/FCR_6675.jpg";
import shoeDetail from "@/assets/FCR_6709.jpg";
import outreachBags from "@/assets/FCR_6411.jpg";
import workshop from "@/assets/FCR_6402.jpg";

const photosByName: Record<string, ImageProps["src"]> = {
  addressing: groupOutreach,
  community: groupOutreach,
  "children-walking-school": schoolChildren,
  "everychild-needs": children,
  everychild: children,
  founder: "/images/MrPhilo.jpeg",
  gallery1: children,
  gallery2: schoolChildren,
  gallery3: distribution,
  gallery4: volunteerPortrait,
  gallery5: fitting,
  gallery6: shoeDetail,
  gallery7: groupOutreach,
  gallery8: distribution,
  hero: children,
  "happy-kids": children,
  "img-9272-01": groupOutreach,
  everymoment: children,
  "keeping-children": schoolChildren,
  howwework: "/images/howWework.png",
  "how-we-work-footprint": "/images/how-we-work-footprint.png",
  "tools-footprint": "/images/tools-footprint.png",
  story1: fitting,
  story2: distribution,
  story3: schoolChildren,
  story4: children,
  "shoe-distribution": outreachBags,
  "team-1": teamPhoto,
  "team-2": volunteerPortrait,
  "team-3": groupOutreach,
  "crafting-1": workshop,
  "crafting-2": workshop,
  "crafting-4": workshop,
  "crafting-6": workshop,
  "crafting-7": workshop,
  "crafting-8": workshop,
  "crafting-9": workshop,
  "crafting-10": workshop,
  mrphilo: "/images/MrPhilo.jpeg",
  volunteers: volunteerPortrait,
  "work-confidence": fitting,
  "protecting-little": shoeDetail,
};

export function resolveRealPhoto(source: ImageProps["src"]): ImageProps["src"] {
  if (typeof source !== "string") return source;

  const name = source
    .split("?")[0]
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .replace(/_/g, "-")
    .toLowerCase();

  if (name && photosByName[name]) return photosByName[name];
  if (source.startsWith("/images/")) return children;

  return source;
}