import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-white border border-[#E6E6E6] rounded-xl p-5'>
      <form className='flex flex-col gap-y-5'>
        <div>
          <label htmlFor="name" className='text-[#101014] leading-4'>Name <span className='text-red-500'>*</span></label>
          <input type="text" name="name" id="name" placeholder='John Smith' className='w-full px-3 text-base py-[13px] bg-[#FAFAFA] border border-[#E6E6E6] placeholder:text-[#10101433] rounded-md' />
        </div>
        <div>
          <label htmlFor="email" className='text-[#101014] leading-4'>Email <span className='text-red-500'>*</span></label>
          <input type="email" name="email" id="email" placeholder='johnsmith@gmail.com' className='w-full px-3 text-base py-[13px] bg-[#FAFAFA] border border-[#E6E6E6] placeholder:text-[#10101433] rounded-md' />
        </div>
        <div>
          <label htmlFor="phoneNumber" className='text-[#101014] leading-4'>Phone Number</label>
          <input type="text" name="phoneNumber" id="phoneNumber" placeholder='+44789 123456' className='w-full px-3 text-base py-[13px] bg-[#FAFAFA] border border-[#E6E6E6] placeholder:text-[#10101433] rounded-md' />
        </div>
        <div>
          <label htmlFor="message" className='text-[#101014] leading-4'>Message<span className='text-red-500'>*</span></label>
          <textarea name="message" id="message" rows={5} placeholder='Hello, I`d like to enquire about...' className="w-full px-3 text-base py-[13px] bg-[#FAFAFA] border border-[#E6E6E6] placeholder:text-[#10101433] rounded-md"></textarea>
        </div>
        <button className='rounded-md py-3 w-full text-white bg-[#101014BF]/75'>
          Send message
        </button>
      </form>
    </div>
  )
}

export default ContactForm