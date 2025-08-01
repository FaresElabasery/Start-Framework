import React from 'react'
import Container from '../Container/Container'
import { TfiWorld } from 'react-icons/tfi'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-Cgray-500 pt-20 '>
      <Container>
        <div className='row'>
          <div className='w-full sm:w-1/3 mb-16 text-center'>
            <h2 className='uppercase text-[clamp(24px,5vw,28px)] font-normal mb-1'>Location</h2>
            <p>2215 John Daniel Drive</p>
            <p className='mt-4'>Clark, MO 65243</p>
          </div>
          <div className='w-full sm:w-1/3 mb-20 text-center'>
            <h2 className='uppercase text-[clamp(24px,5vw,28px)] font-normal mb-1'>AROUND THE WEB</h2>
            <ul className='row gap-2 justify-center'>
              <li className='social-icons'><a href="https://www.facebook.com/fares.elabasery.9"></a><FaFacebook className='size-5' /></li>
              <li className='social-icons'><a href="https://github.com/FaresElabasery?tab=repositories"></a><FaTwitter className='size-5' /></li>
              <li className='social-icons'><a href="https://www.linkedin.com/in/fares-elabasery/"></a><FaLinkedinIn className='size-5' /></li>
              <li className='social-icons'><a href="https://www.linkedin.com/in/fares-elabasery/"></a><TfiWorld className='size-5' /></li>
            </ul>
          </div>
          <div className='w-full sm:w-1/3 mb-20 text-center'>
            <h2 className='uppercase text-[clamp(24px,5vw,28px)] font-normal mb-1'>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </Container>
      <div className='bg-Cgray-900 text-center text-Cgray-400 py-6 mt-20 w-full'>
        Copyright &copy; Your Website 2021
      </div>
    </div>
  )
}
