import Image from "next/image"
import shop from "../../public/shop.png"

const Banner = () => {
  return (
    <div className="md:flex px-[10rem] h-[100vh] w-[100%]">
      <div>
        <h1 className='flex flex-col'>
            <span style={{fontWeight:'800', color: 'brown'}}>Coffee </span>
            <span style={{fontWeight:'800', color: '#888160d7'}}>Connoisseur</span>
        </h1>
        <p>
          Find local coffee stores nearby
        </p>
      </div>
      <div className="flex-grow"></div>
      <div>
        <Image src={shop} width={400} height={400} />
      </div>
    </div>
  )
}

export default Banner