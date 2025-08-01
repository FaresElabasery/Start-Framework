
import Container from './../../components/Container/Container';
import Heading from './../../components/Heading/Heading';
export default function Contact() {

  const handleFocus = (e) => {
    const target = e.target;
    target.nextElementSibling.children[0].classList.add('translate-y-0');
    target.nextElementSibling.children[0].classList.remove('translate-y-10');
    if (e.target.value === '') {
      target.nextElementSibling.children[0].classList.add('translate-y-10');
      target.nextElementSibling.children[0].classList.remove('translate-y-0');
    }
  }
  return (
    <div className="flex-center h-screen">
      <Container>
        <div className='flex-center flex-col mt-16'>
          <Heading text='conatct section' color='dark' />
          <div className='w-full md:w-[700px]'>
            <div className='flex flex-col gap-5 mt-10 text-Cgray-200 '>
              <div className=' w-full relative '>
                <input aria-label="userName" onInput={(e) => handleFocus(e)} className='w-full outline-0 border-b-1 pt-4 pb-2 rounded-lg px-2 border-b-Cgray-200/10' type="text" id='userName' placeholder='userName' />
                <div className='py-4 h-full w-full  absolute bottom-full start-0  overflow-hidden'>
                  <label className='absolute translate-y-10 transition-all duration-400 text-Cgreen-500' htmlFor="userName">userName :</label>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 mt-10 text-Cgray-200'>
              <div className=' w-full relative '>
                <input aria-label="userAge" onInput={(e) => handleFocus(e)} className='w-full outline-0 border-b-1 pt-4 pb-2 rounded-lg px-2 border-b-Cgray-200/10' type="number" id='userAge' placeholder='userAge' />
                <div className='py-4 h-full w-full  absolute bottom-full start-0  overflow-hidden'>
                  <label className='absolute translate-y-10 transition-all duration-400 text-Cgreen-500' htmlFor="userAge">userAge :</label>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 mt-10 text-Cgray-200'>
              <div className=' w-full relative '>
                <input aria-label="userEmail" onInput={(e) => handleFocus(e)} className='w-full outline-0 border-b-1 pt-4 pb-2 rounded-lg px-2 border-b-Cgray-200/10' type="email" id='userEmail' placeholder='userEmail' />
                <div className='py-4 h-full w-full  absolute bottom-full start-0  overflow-hidden'>
                  <label className='absolute translate-y-10 transition-all duration-400 text-Cgreen-500' htmlFor="userEmail">userEmail :</label>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 mt-10 text-Cgray-200'>
              <div className=' w-full relative '>
                <input aria-label="userPassword" onInput={(e) => handleFocus(e)} className='w-full outline-0 border-b-1 pt-4 pb-2 rounded-lg px-2 border-b-Cgray-200/10' type="password" id='userPassword' placeholder='userPassword' />
                <div className='py-4 h-full w-full  absolute bottom-full start-0  overflow-hidden'>
                  <label className='absolute translate-y-10 transition-all duration-400 text-Cgreen-500' htmlFor="userPassword">userPassword :</label>
                </div>
              </div>
            </div>
            <button className='custom-btn active cursor-pointer mt-10 me-auto'>send Message</button>
          </div>
        </div>
      </Container>
    </div>
  )
}
