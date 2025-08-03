import { useCallback, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal({ handleCloseModal, img, setIsModalOpen, isModalOpen }) {

  // handle to close modal Esc
  const handleCloseModalEsc = useCallback((e) => {
    if (e.key === 'Escape' && isModalOpen)
      setIsModalOpen(false)
  }, [isModalOpen, setIsModalOpen])

  // handle modal be without scroll
  useEffect(() => {
    if (isModalOpen)
      document.body.style.overflow = 'hidden'
    else
      document.body.style.overflow = ''

    return () => document.body.style.overflow = '';
  }, [isModalOpen])

  // add event listener to close modal 
  useEffect(() => {
    window.addEventListener('keydown', handleCloseModalEsc)

    // clean event listener when component unmount
    return () => {
      window.removeEventListener('keydown', handleCloseModalEsc)
    }
  }, [handleCloseModalEsc])

  // if it close remove modal from dom 
  if (!isModalOpen) return null;
  return (
    <div className='modal-backdrop fixed bg-blue-500/20 inset-0 z-10 flex-center backdrop-blur-sm' onClick={(e) => handleCloseModal(e)} >
      <div className="relative">
        <img className='px-4 md:w-[600px]' src={img} alt="img 1" />
        <span className="absolute top-1 right-5 cursor-pointer hover:bg-amber-50 rounded-full flex-center hover:text-Cgray-500 hover:rotate-180 transition-all duration-300" onClick={() => setIsModalOpen(false)}><IoIosCloseCircleOutline size={30} />
        </span>
      </div>
    </div>
  )
}
