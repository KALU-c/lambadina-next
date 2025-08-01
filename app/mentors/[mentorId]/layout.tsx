"use client"

import MentorDetailDesktop from "@/components/@Desktop/MentorDetail";
import { useLayoutEffect, useState } from "react"

const MentorDetailLayout = ({ children }: { children: React.ReactNode }) => {
	const [isMobile, setIsMobile] = useState(true);

	useLayoutEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	if (isMobile) return children

	return <MentorDetailDesktop />;
}
export default MentorDetailLayout