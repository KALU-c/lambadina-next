"use client"

import { useAuth } from "@/hooks/useAuth"
import { redirect } from "next/navigation";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	const { isAuthLoaded, isAuthenticated } = useAuth();

	if (!isAuthLoaded) {
		return (
			<div className="py-12 text-center text-gray-500 text-lg">Loading...</div>
		)
	} <div className="py-12 text-center text-gray-500 text-lg">Loading...</div>

	if (!isAuthenticated) {
		redirect("/login")
	}

	return (
		<>{children}</>
	)
}

export default ProtectedLayout
