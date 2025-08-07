"use client"

import DashboardDesktop from '@/components/@Desktop/Dashboard';
import { useAuth } from '@/hooks/useAuth'
import useDevice from '@/hooks/useDevice';
import { redirect } from 'next/navigation';
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const { user } = useAuth();
	const { isMobile } = useDevice()

	if (user?.user_type !== "mentor") {
		return redirect("/")
	}

	if (isMobile) return children;

	return <DashboardDesktop />
}

export default DashboardLayout
