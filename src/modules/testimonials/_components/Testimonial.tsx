import Badge from "@/components/common/Badge"
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard"

const testimonials: TestimonialCardProps[] = [
  {
    rate: 5,
    review: "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    citation_image: "/assets/img/works/image-1.png",
    name: "Emily Carter"
  }
] 

const Testimonial = () => {
  return (
    <div className="bg-white py-[120px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
         <Badge title="Testimonials" />
         <h2 className="text-[#101014] font-medium text-5xl mt-2">Hear from our clients</h2> 
         <p className="text-xl text-[#3D3D47] mt-4 text-center">Hear from our happy clients about their experience working <br /> with Refit and the quality of our craftsmanship.</p>
        </div>
      </div>
      <div className="mt-24">
        <TestimonialCard  data={testimonials} />
      </div>
    </div>
  )
}

export default Testimonial