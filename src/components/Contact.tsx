import { ReactTyped } from 'react-typed'

const Contact = () => {
  return (
    <div
      className='flex flex-col bg-black p-2 font-helveticanowdisplay
    text-white'
    >
      <div className='py-14 text-[150px] max-md:text-8xl'>
        <ReactTyped
          strings={['Lyfestyle', 'Lyfe', 'Afterlyfe']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <div className='grid grid-cols-2 gap-x-5 text-base text-[#A5A5A5] max-md:space-y-4 max-sm:grid-cols-1 md:grid-cols-4'>
        <div className='flex flex-col justify-end'>Carttie © 4tU+.*</div>
        <div className='flex flex-col justify-end'>
          Email: <br /> example@gmail.com
          <br /> <br />
          Mobile: <br /> +44 (0)19940477
        </div>
        <div className='flex flex-col justify-end'>@carttie7</div>
        <div className='flex flex-col justify-end'>
          Marching/Touchdown
          <br />
          BURNTHACITYDOWN
          <br />
          STFU <br />
          Stylërz <br />
          Met Tha Mob <br />
          Back 2 basics
          <br />
          Scary
        </div>
      </div>
    </div>
  )
}

export default Contact
