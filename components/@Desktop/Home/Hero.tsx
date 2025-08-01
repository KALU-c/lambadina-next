import React from 'react'
import NavBarDesktop from '../components/NavBarDesktop'
import Image from 'next/image'

const Hero = () => {
	return (
		<section className='relative xl:px-[200px] lg:px-[150px] md:px-[50px] min-h-dvh text-white flex flex-col'>
			<Image
				src={'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
				alt='hero-img'
				className='absolute inset-0 md:min-h-dvh max-h-dvh w-full -z-20 object-cover'
				width={200}
				height={200}
				unoptimized
			/>
			<div className='absolute inset-0 bg-black opacity-70 -z-10' />
			<NavBarDesktop />
			<div className='flex-1 h-full flex flex-col items-center justify-center gap-5'>
				<h1 className='2xl:text-[130px] xl:text-[100px] lg:text-[80px] md:text-[60px] tracking-tighter font-semibold leading-[1.05em] flex-wrap text-center opacity-90'>Ethiopia’s First Mentorship Platform</h1>
				<p className='2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[16px] opacity-80'>Don’t Hustle by yourself. Contact someone who’s been there</p>
			</div>
		</section>
	)
}

export default Hero
