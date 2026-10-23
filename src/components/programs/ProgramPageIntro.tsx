import type { ReactNode } from "react";
import EditorialHero from "@/components/ui/EditorialHero";

interface ProgramPageIntroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

export default function ProgramPageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: ProgramPageIntroProps) {
  return (
    <EditorialHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      imageAlt={imageAlt}
    >
      {children}
    </EditorialHero>
  );
}
