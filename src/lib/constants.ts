export type Menu = {
  title: string;
  href: string;
}

export const MENU_LIST: readonly Menu[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Service",
    href: "#service",
  },
  {
    title: "Our Work",
    href: "#our-work",
  },
  {
    title: "FAQs",
    href: "#faqs",
  },
  {
    title: "Contact",
    href: "#contact",
  },
] as const