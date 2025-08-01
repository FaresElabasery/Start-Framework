import React from 'react'
import Container from './../../components/Container/Container';
import Heading from './../../components/Heading/Heading';

export default function About() {
  return (
    <div className='flex-center h-[97vh] bg-Cgreen-500 '>
      <Container>
        <div className='flex-center flex-col '><Heading text='about component'/></div>
      </Container>
    </div>
  )
}
