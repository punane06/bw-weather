import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'

const Header = () => {
  return (
    <Image src={Logo} alt={'logo'} className='logo' priority />
  )
}

export default Header