export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  gradient?: string;
}

export interface HeroProps {
  heroBanner: HeroBanner[];
}
