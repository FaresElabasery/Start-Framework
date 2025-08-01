import homeImg from '../../assets/home.svg';
import Container from './../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
export default function Home() {
    return (
        <div className='flex-center h-[97vh] bg-Cgreen-500'>
            <Container>
                <div className='flex flex-col mt-20 justify-center items-center'>
                    <div className="img-container size-60 ">
                        <img className='w-100' src={homeImg} alt="person image" />
                    </div>
                    <Heading />
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </Container>
        </div>
    )
}
