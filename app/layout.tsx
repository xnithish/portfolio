import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MobileHeader } from "@/components/mobile-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nithish Gowda | Frontend Developer",
  description: "Frontend Developer with hands-on experience building responsive web applications. Built portfolio projects including a cryptocurrency dashboard, an e-commerce site, CRM dashboard and more. Strong foundation in version control, component-driven development, and performance optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <MobileHeader />
        <SidebarProvider>
          <div className="hidden md:block">
            <AppSidebar />
          </div>
          <SidebarInset >
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
