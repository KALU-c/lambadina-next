"use client"

import HomeDesktop from "@/components/@Desktop/Home";
import Home from "@/components/Home";
import { useLayoutEffect, useState } from "react";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(true)

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, []);

  if (isMobile) return <Home />

  return <HomeDesktop />
}
