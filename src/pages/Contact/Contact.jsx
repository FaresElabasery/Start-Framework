
import Container from './../../components/Container/Container';
import Heading from './../../components/Heading/Heading';
import FloatingInput from './../../components/FloatingInput/FloatingInput';
import { useEffect } from 'react';
import { ChangeTitle } from '../../utils/title';
export default function Contact() {
  // feilds of input for looping 
  const fields = [
    { id: "userName", type: "text", label: "User Name" },
    { id: "userAge", type: "number", label: "User Age" },
    { id: "userEmail", type: "email", label: "User Email" },
    { id: "userPassword", type: "password", label: "User Password" }
  ];

  // handle focus to animate label
  const handleFocus = (e) => {
    const target = e.target;
    target.nextElementSibling.children[0].classList.add('translate-y-0');
    target.nextElementSibling.children[0].classList.remove('translate-y-10');
    if (e.target.value === '') {
      target.nextElementSibling.children[0].classList.add('translate-y-10');
      target.nextElementSibling.children[0].classList.remove('translate-y-0');
    }
  }
  useEffect(() => {
    ChangeTitle('Contact');
    return () => {
      ChangeTitle('Start Framework');
    }
  }, [])
  return (
    <div className="flex-center h-screen">
      <Container>
        <div className='flex-center flex-col mt-16'>
          <Heading text='conatct section' color='dark' />
          <div className='w-full md:w-[700px]'>
            {fields.map(({ id, type, label }, i) => (
              <FloatingInput key={i} id={id} type={type} label={label} handleFocus={(e) => handleFocus(e)} />
            ))}
            <button className='custom-btn active cursor-pointer mt-10 me-auto'>send Message</button>
          </div>
        </div>
      </Container>
    </div>
  )
}
