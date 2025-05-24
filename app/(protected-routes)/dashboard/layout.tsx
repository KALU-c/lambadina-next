"use client"

import { useAuth } from '@/hooks/useAuth'
import { redirect } from 'next/navigation';
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const { user } = useAuth();

	if (user?.user_type !== "mentor") {
		return redirect("/")
	}

	return <>{children}</>
}

export default DashboardLayout
