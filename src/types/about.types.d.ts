export type StatItem = {
  count: string;
  title: string;
  description: string;
}

export type AboutContent = {
  badge: string;
  title: string[];
  description: string;
  stats: StatItem[];
  images: { id: number; src: string; alt: string }[];
}
