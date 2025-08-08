import { useState } from 'react';
import images from '../../utils/images';
import Card from './../../components/Card/Card';
import Container from './../../components/Container/Container';
import Heading from './../../components/Heading/Heading';
import Modal from './../../components/Modal/Modal';

export default function Portfolio() {
    // State to track if the modal is open
    const [isModalOpen, setIsModalOpen] = useState(false)

    // State to store the selected image src
    const [img, setImg] = useState('')

    // Convert images object to an array for mapping
    const ArrayImages = Object.entries(images)

    // Close modal if backdrop is clicked
    const handleCloseModal = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            setIsModalOpen(false)
        }
    }

    // Find image by name and return its source
    const findImage = (imgName) => ArrayImages.find(([Name, _]) => imgName === Name);

    // Set image src and open modal
    const handleImageModal = (e) => {
        setIsModalOpen(true)
        setImg(() => findImage(e.target.alt)[1])
    }
    return (
        <div className='flex-center flex-col py-20'>
            <title>Portfolio</title>
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
                    {/* Render modal if isModalOpen is true */}
                    {isModalOpen &&
                        <Modal handleCloseModal={(e) => handleCloseModal(e)} img={img} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />}
                </div>
            </Container>
        </div>
    )
}
