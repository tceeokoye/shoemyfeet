import EditorialHero from "@/components/ui/EditorialHero";

interface AboutPageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function AboutPageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: AboutPageIntroProps) {
  return (
    <EditorialHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      imageAlt={imageAlt}
    />
  );
}
