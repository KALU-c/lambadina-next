"use client"

import LoginDesktop from "@/components/@Desktop/Auth/LoginDesktop";
import Login from "@/components/Auth/Login"
import useDevice from "@/hooks/useDevice"

const LoginPage = () => {
	const { isMobile } = useDevice();

	if (isMobile) return <Login />

	return <LoginDesktop />
}

export default LoginPage
