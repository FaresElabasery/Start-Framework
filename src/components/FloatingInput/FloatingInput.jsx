
export default function FloatingInput({id, type, label, handleFocus}) {
    return (
        <div className='flex flex-col gap-5 mt-10 text-Cgray-200 '>
            <div className=' w-full relative '>
                <input aria-label={id} onInput={(e) => handleFocus(e)} className='w-full outline-0 border-b-1 pt-4 pb-2 rounded-lg px-2 border-b-Cgray-200/10' type={type} id={id} placeholder={id} />
                <div className='py-4 h-full w-full  absolute bottom-full start-0  overflow-hidden'>
                    <label className='absolute translate-y-10 transition-all duration-400 ease-in-out text-Cgreen-500' htmlFor={id}>{label}</label>
                </div>
            </div>
        </div>
    )
}
