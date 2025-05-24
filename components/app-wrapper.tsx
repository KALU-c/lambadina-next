'use client'

import { useLayoutEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import RestrictedDevices from '@/components/RestrictedDevices'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
	const { isAuthLoaded } = useAuth()
	const [isMobile, setIsMobile] = useState(true)
	const pathname = usePathname()

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	useLayoutEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 768)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	if (!isMobile) return <RestrictedDevices />
	if (!isAuthLoaded) return <div className="py-12 text-center text-gray-500 text-lg">Loading...</div>

	return <>{children}</>
}
