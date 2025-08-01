import { LuPlus } from "react-icons/lu";

export default function Card({ img, handleImageModal,imgName }) {
  return (
    <div className='card'>
      <div className='inner p-5'>
        <div className='relative cursor-pointer' onClick={(e) => handleImageModal(e)}>
          <img className='w-100 rounded-lg' src={img} alt={imgName} />
          <div className="flex-center opacity-0 hover:opacity-100 absolute inset-0 rounded-lg transition-all duration-400 ease-in-out bg-Cgreen-500/90 ">
          <img className='inset-0 absolute opacity-0' src={img} alt={imgName} />
            <LuPlus className='size-40' />
          </div>
        </div>
      </div>
    </div>
  )
}
