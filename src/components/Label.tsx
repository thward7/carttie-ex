import Carttie from '../assets/label-carttie.svg'

const Label = () => {
  return (
    <div className=''>
      <div className='border-b-[1px] border-[#282827] px-2 py-4'>
        <img src={Carttie} />
      </div>
      <div>
        <p className='p-2 font-neuehaasdisplay sm:text-2xl md:text-3xl'>
          Lorem ipsum dolor sit <ins>amet</ins> , consectetur adipisicing elit .
          Sint aliquam <b>consequuntur</b> ratione accusantium nemo facilis ,
          autem repellendus similique , <b>voluptate</b> beatae nihil amet vitae
          , ad delectus illo optio perspiciatis neque <ins>porro</ins> ! Lorem
          ipsum dolor sit amet consectetur adipisicing elit . Harum enim
          officiis qui maxime , <i>voluptates</i> magnam recusandae unde veniam
          quae quo nihil laboriosam aliquid fugit <i>tenetur</i> , voluptas
          tempore ! Facilis , suscipit fuga ?
        </p>
      </div>
    </div>
  )
}

export default Label
