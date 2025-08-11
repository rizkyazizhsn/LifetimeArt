type StatsProps = {
  count: number;
  title: string;
  description: string;
}

const Stats = ({
  count,
  title,
  description
}: StatsProps) => {
  return (
    <div className='flex flex-col gap-y-2 '>
      <h4 className='text-7xl leading-[170%] text-[#101014]'>{count}</h4>
      <p className='font-semibold text-xl leading-8 text-[#101014]'>{title}</p>
      <p className='text-base leading-4 text-[#3D3D47]'>{description}</p>
    </div>
  )
}

export default Stats