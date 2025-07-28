import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import AppWrapper from "@/components/app-wrapper";
import { Toaster } from "sonner";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lambadina Mentorship Platform",
  description: 'Connect with expert mentors for personalized guidance in your career and personal growth journey. Book 1:1 sessions with industry professionals across various fields.',
  keywords: [
    'mentorship',
    'career guidance',
    'professional development',
    'expert advice',
    '1:1 coaching',
    'skill development',
    'mentor matching',
  ],
  creator: 'Lambadina',
  publisher: 'Lambadina',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${InterSans.className}`}>
        <AuthProvider>
          <AppWrapper>
            {children}
            <Toaster richColors />
          </AppWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
