import { LuPlus } from "react-icons/lu";

export default function Card({ img, handleImageModal, imgName }) {
  return (
    <div className='card'>
      <div className='inner p-5'>
        <div className='relative cursor-pointer group'>

          <img
            className='w-100 rounded-lg'
            src={img}
            alt={imgName}
            onClick={(e) => handleImageModal(e)}
            role="button"
            aria-label={`View ${imgName}`}
          />

          <div className="flex-center opacity-0 group-hover:opacity-100 absolute inset-0 rounded-lg transition-all duration-400 ease-in-out bg-Cgreen-500/90 pointer-events-none">
            <LuPlus className='size-40' />
          </div>
        </div>
      </div>
    </div>
  )
}
