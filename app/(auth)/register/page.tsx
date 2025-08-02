"use client"

import RegisterDesktop from "@/components/@Desktop/Auth/RegisterDesktop";
import Register from "@/components/Auth/Register"
import useDevice from "@/hooks/useDevice"

const RegisterPage = () => {
	const { isMobile } = useDevice();

	if (isMobile) return <Register />

	return <RegisterDesktop />
}

export default RegisterPage
