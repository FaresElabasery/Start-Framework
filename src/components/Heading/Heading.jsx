import { FaStar } from 'react-icons/fa'

export default function Heading({ text, color = 'white' }) {
  const colors = {
    dark: "text-Cgray-500",
    white: "text-white",
  };
  return (
    <>
      <h1 className={`uppercase text-[clamp(27px,5vw,40px)] font-bold mt-16 ${colors[color]}`}>{text}</h1>
      <span className='w-52 h-1 mx-auto my-5 inline-block relative bg-white'>
        <span className='absolute top-1/2 left-1/2 -translate-1/2 px-4 bg-Cgreen-500'>
          <FaStar className='size-5' />
        </span>
      </span>
    </>
  )
}
