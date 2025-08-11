"use client";

import Accordion from "@/components/common/Accordion"
import Badge from "@/components/common/Badge"
import IconButton from "@/components/common/IconButton"
import Subtitle from "@/components/common/Subtitle"
import Title from "@/components/common/Title"
import { useState } from "react"

const accordionData = [
    {
      title: "What area are you based in?",
      content: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
      title: "How long does a typical project take?",
      content: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
      title: "Do you offer free quotes?",
      content: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
      title: "Will I need planning permission for my project?",
      content: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
      title: "Do you provide a guarantee for your work?",
      content: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
      title: "Can I stay in my home while the work is being done?",
      content: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
      title: "How do I get started with a project?",
      content: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
  ];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="bg-white">
      <div className="container py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <div>
            <Badge title="FAQs" />
            <Title>
              Answering Your Questions
            </Title>
            <Subtitle className="mt-2 mb-4">
              Got more questions? Send us your enquiry below
            </Subtitle>
            <IconButton variant="dark" className="mt-14">
              Get in touch
            </IconButton>
          </div>
          {/* Right Content */}
          <div>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                onToggle={(open) => setOpenIndex(open ? index : null)}
                className="rounded-xl border border-[#E6E6E6] bg-[#FAFAFA] px-5 mb-5 last:mb-0"
              >
                {item.content}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq