import Badge from "@/components/common/Badge"

const Work = () => {
  return (
    <div className="bg-white py-[120px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
         <Badge title="Our work" />
         <h2 className="text-[#101014] font-medium text-5xl mt-2">Get inspired by our work</h2> 
         <p className="text-xl text-[#3D3D47] mt-4 text-center">See how we’ve transformed homes with our expert <br /> craftsmanship and attention to detail.</p>
        </div>
      </div>
    </div>
  )
}

export default Work