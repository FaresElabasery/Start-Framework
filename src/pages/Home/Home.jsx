import homeImg from '../../assets/home.svg';
import Container from './../../components/Container/Container';
import LineStar from './../../components/LineStar/LineStar';
export default function Home() {
    return (
        <div className='flex justify-center items-center h-[97vh] bg-Cgreen-500'>
            <Container>
                <div className='flex flex-col mt-20 justify-center items-center'>
                    <div className="img-container size-60 ">
                        <img className='w-100' src={homeImg} alt="person image" />
                    </div>
                    <h1 className='uppercase text-[clamp(27px,5vw,40px)] font-bold mt-16'>start Framework</h1>
                    <LineStar />
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </Container>
        </div>
    )
}
