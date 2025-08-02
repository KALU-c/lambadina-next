"use client"

import ProfileDesktop from "@/components/@Desktop/Profile";
import Profile from "@/components/Profile"
import useDevice from "@/hooks/useDevice"

const ProfilePage = () => {
	const { isMobile } = useDevice();

	if (isMobile) return <Profile />

	return <ProfileDesktop />
}

export default ProfilePage
