import { Link } from 'react-router-dom';
import Container from './../../components/Container/Container';

export default function NoFoundPage() {
  return (
    <div className='flex-center h-screen text-Cgray-200'>
      <Container>
        <div className='flex-center flex-col text-center mt-20'>
          <h1 className='text-9xl animate-bounce'>404</h1>
          <h3 className='text-3xl my-5'>Oops! Page Not Found</h3>
          <p>The Page you are looking for doesn't exist or has been removed</p>
          <Link to={'/startFramework'} className='custom-btn w-full md:w-1/4 active cursor-pointer mt-8 text-white'>Go Back</Link>
        </div>
      </Container>
    </div>
  )
}
