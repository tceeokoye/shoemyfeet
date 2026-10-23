type TitleSplashVariant = 1 | 2 | 3 | 4;

interface TitleSplashBackgroundProps {
  variant: TitleSplashVariant;
  light?: boolean;
}

export default function TitleSplashBackground({
  variant,
  light = false,
}: TitleSplashBackgroundProps) {
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-0 z-0 bg-center bg-no-repeat [background-size:100%_100%] ${
        light ? "brightness-0 invert" : ""
      }`}
      style={{ backgroundImage: `url('/images/title-splash-${variant}.svg')` }}
    />
  );
}
