import Badge from "@/components/common/Badge"

const Service = () => {
  return (
    <div className="bg-[#FAFAFA] py-[120px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
         <Badge title="Services" />
         <h2 className="text-[#101014] font-medium text-5xl mt-2">What we do</h2> 
         <p className="text-xl text-[#3D3D47] mt-4">Find out which one of our services fit the needs of your project</p>
        </div>
      </div>
    </div>
  )
}

export default Service