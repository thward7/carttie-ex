import WorkAGC from '../assets/work-agc.jpg'
import WorkTag from '../assets/work-tag.jpg'

const Works = () => {
  return (
    <div
      className='flex flex-col bg-black p-2
    font-helveticanowdisplay text-white'
    >
      <div className='flex justify-end px-4 text-[400px] font-bold max-lg:text-[300px] max-md:text-[200px] max-sm:text-8xl'>
        Work
      </div>
      <div className='grid grid-cols-3'>
        <div>
          <img src={WorkAGC} className='w-[600px]' />
        </div>
        <div className='flex items-end justify-end text-xl max-lg:px-2 lg:text-3xl'>
          "AGC" 2024
        </div>
        <div className='flex items-end justify-end'>
          <img src={WorkTag} className='w-[300px] max-md:w-[150px]' />
        </div>
      </div>
    </div>
  )
}

export default Works
