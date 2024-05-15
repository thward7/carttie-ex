import Marquee from 'react-fast-marquee'

const Ticker = () => {
  return (
    <Marquee
      autoFill
      pauseOnClick
      direction='right'
      speed={100}
      className='my-14 font-helveticanowdisplay text-lg text-[#A5A5A5]'
    >
      Marching/Touchdown BURNTHACITYDOWN STFU Stylërz Met Tha Mob Back 2 basics
      Scary
    </Marquee>
  )
}

export default Ticker
