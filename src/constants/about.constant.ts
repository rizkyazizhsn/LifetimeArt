import { AboutContent } from "@/types/about.types";

export const ABOUT_CONTENT: AboutContent = {
  badge: "About us",
  title: ["Home", "Improvement", "Specialists"],
  description: `Welcome to LifetimeArt , your trusted home improvement experts,
              dedicated to transforming homes with precision and care. With
              years of experience in building kitchens, bathrooms, garages, and
              more, we take pride in delivering top-quality craftsmanship and a
              seamless customer experience. Our mission is to bring your vision
              to life while ensuring clear communication and expert guidance at
              every step. Let&apos;s create a home you&apos;ll love!`,
  stats: [
    { count: "8", title: "Years experience", description: "Improving homes with expert craftsmanship for years" },
    { count: "26", title: "Projects completed", description: "Over 250 successful projects delivered with quality and care" },
    { count: "30", title: "Skilled Tradespeople", description: "Our team of 30 experts ensures top-quality results" },
    { count: "100%", title: "Client satisfaction", description: "All of our clients are satisfied with our work and service" }
  ],
  images: Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    src: `/assets/img/about/image-${index + 1}.png`,
    alt: `About image ${index + 1}`,
  }))
};
