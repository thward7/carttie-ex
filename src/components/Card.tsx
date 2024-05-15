import { IWear } from '../types'

const Card = (wear: IWear) => {
  return (
    <div className='flex h-[550px] flex-col items-center border-[1px] border-black'>
      <div className='my-12 flex size-[300px] items-center'>
        <img src={wear.img} alt='' className='size-full object-contain' />
      </div>
      <div className='flex flex-col items-center space-y-3'>
        <p className='py-4 text-sm font-black'>{wear.title}</p>
        <div className='flex space-x-8 text-[11px] text-[#4d4d4d]'>
          {wear.sizes.map((wearSize) =>
            wearSize.quantity == 0 ? (
              <p className='line-through opacity-70'>{wearSize.size}</p>
            ) : (
              <p>{wearSize.size}</p>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
