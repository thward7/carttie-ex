const Header = () => {
  return (
    <div className='flex w-full items-start justify-between p-2'>
      <h1 className='font-retrosailing text-8xl'>
        4tU
        <br />
        +.*
      </h1>
      <div className='flex gap-3 font-suisseintl max-sm:flex-col'>
        <button className='rounded-full bg-blue-600 px-2.5 py-0.5 text-[11px] uppercase text-white'>
          Works
        </button>
        <button className='rounded-full bg-orange-500 px-2.5 py-0.5 text-[11px] uppercase text-white'>
          Contact
        </button>
        <button className='rounded-full bg-pink-400 px-2.5 py-0.5 text-[11px] uppercase text-white'>
          Instagram
        </button>
      </div>
    </div>
  )
}

export default Header
