import Image, { type ImageProps } from "next/image";
import { resolveRealPhoto } from "@/lib/realPhotos";

export default function RealImage(props: ImageProps) {
  return <Image {...props} src={resolveRealPhoto(props.src)} />;
}