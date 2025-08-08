import Container from './../../components/Container/Container';
import Heading from './../../components/Heading/Heading';

export default function About() {
  return (
    <div className='flex-center h-[97vh] bg-Cgreen-500 '>
      <title>About</title>
      <Container>
        <div className='flex-center flex-col mt-10'>
          <Heading text='about component' />
          <div className='row px-5 sm:px-0'>
            <p className='w-full ps-5 mb-4 md:mb-0 md:w-1/2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='w-full px-5 md:w-1/2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
