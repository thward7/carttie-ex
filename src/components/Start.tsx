import About from './About'
import Header from './Header'
import Label from './Label'

const Start = () => {
  return (
    <div className='flex min-h-screen flex-col justify-between bg-[#f9f6ef] text-[#282827]'>
      <Header />
      <About />
      <Label />
    </div>
  )
}

export default Start
