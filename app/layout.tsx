import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import AppWrapper from "@/components/app-wrapper";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
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
