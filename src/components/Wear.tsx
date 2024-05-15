import { items } from '../data'
import Card from './Card'

const Wear = () => {
  return (
    <div className='grid w-full bg-[#f9f6ef] font-bbcondensed uppercase text-[#282827] sm:grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-4'>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          sizes={item.sizes}
        />
      ))}
    </div>
  )
}

export default Wear
