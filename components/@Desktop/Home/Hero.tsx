import React from 'react'
import NavBarDesktop from '../NavBarDesktop'
import Image from 'next/image'

const Hero = () => {
	return (
		<section className='relative xl:px-[200px] lg:px-[150px] md:px-[100px] min-h-dvh text-white'>
			<Image
				src={'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
				alt='hero-img'
				className='absolute inset-0 max-h-dvh w-full -z-20 object-cover'
				width={200}
				height={200}
				unoptimized
			/>
			<div className='absolute inset-0 bg-black opacity-70 -z-10' />
			<NavBarDesktop />
			desktop hero
		</section>
	)
}

export default Hero
