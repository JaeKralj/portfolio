export default function Skeleton() {
  return (
    <div className='flex odd:flex-row-reverse lg:flex-row flex-col justify-evenly items-center py-5 flex-wrap'>
      <div className='lg:basis-2/5 h-80 p-5 bg-black bg-opacity-[0.55] animate-pulse'></div>
      <div className='lg:basis-2/5'>
        <div className='mb-5'>
          <div className='p-2 my-2 bg-black bg-opacity-[0.55] animate-pulse'></div>
          <div className='p-2 my-2 bg-black bg-opacity-[0.55] animate-pulse'></div>
        </div>
        <div className='p-5 h-40 bg-black bg-opacity-[0.55] animate-pulse'></div>
      </div>
    </div>
  )
}
