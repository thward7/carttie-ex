import Clock from './Clock'

const About = () => {
  return (
    <div className='grid gap-3 px-2 py-[5%] font-suisseintl text-sm sm:grid-cols-3 md:grid-cols-6'>
      <div className='col-span-2 flex flex-col justify-between'>
        TWIZZ!
        <br />
        <br /> I'm Carttie, front-end react devoloper, Lorem ipsum dolor sit
        amet, consectetur , Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Et praesentium nisi & Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quos delectus eveniet nemo based in Russia
        <Clock />
      </div>
      <div className='col-start-5'>
        INFO
        <br />
        <br />
        And the kel-tec'll make a n flip like gymnastics.
      </div>
      <div>
        OTHER INFO
        <br />
        <br /> U get ignored, b, u borin', u can't date me now. Take me out.
      </div>
    </div>
  )
}

export default About
