export interface HeroContent {
  status: string;
  headline: string[];
  description: string;
  cta: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}