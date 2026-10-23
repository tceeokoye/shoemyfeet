import type { ReactNode } from "react";
import EditorialHero from "@/components/ui/EditorialHero";

interface ImpactPageIntroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

export default function ImpactPageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: ImpactPageIntroProps) {
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
