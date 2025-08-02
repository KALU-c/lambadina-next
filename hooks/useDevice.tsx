import { useLayoutEffect, useState } from "react";

const useDevice = () => {
	const [isMobile, setIsMobile] = useState(true)

	useLayoutEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 768)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, []);

	return { isMobile }
}

export default useDevice