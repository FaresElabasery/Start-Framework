import { useEffect, useState } from 'react';
import images from '../../utils/images';
import Card from './../../components/Card/Card';
import Container from './../../components/Container/Container';
import Heading from './../../components/Heading/Heading';
import Modal from './../../components/Modal/Modal';
import { ChangeTitle } from '../../utils/title';

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [img, setImg] = useState('')
    const ArrayImages = Object.entries(images)
    const handleCloseModal = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            setIsModalOpen(false)
        }
    }
    const findImage = (imgName) => ArrayImages.find(([Name, _]) => imgName === Name);
    const handleImageModal = (e) => {
        setIsModalOpen(true)
        setImg(() => findImage(e.target.alt)[1])
    }
    useEffect(() => {
      ChangeTitle('Portfolio');
      return () => {
        ChangeTitle('Start Framework');
      }
    }, [])
    

    return (
        <div className='flex-center flex-col py-20'>
            <Container>
                <div className='flex-center flex-col -mx-5'>
                    <Heading color='dark' text='portfolio component' />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3">
                        {ArrayImages.map(([imgName, img], i) => (
                            <div key={i}>
                                <Card handleImageModal={e => handleImageModal(e)} img={img} imgName={imgName} />
                            </div>
                        ))}
                    </div>
                    {isModalOpen &&
                        <Modal handleCloseModal={(e) => handleCloseModal(e)} img={img} setIsModalOpen={setIsModalOpen} />}
                </div>
            </Container>
        </div>
    )
}
