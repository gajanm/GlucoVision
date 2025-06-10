import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "GlucoVision - Non-invasive Glucose Monitoring",
  description: "The world's most affordable non-invasive glucose monitoring device",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-indigo-100">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3.5C7.5 9.5 5.5 12.5 5.5 15.5C5.5 19.5 8.5 22.5 12 22.5C15.5 22.5 18.5 19.5 18.5 15.5C18.5 12.5 16.5 9.5 12 3.5Z"
                        fill="white"
                        className="transform -rotate-45"
                      />
                    </svg>
                  </div>
                  <h1 className="text-2xl text-gray-900 font-bold group-hover:text-indigo-600 transition-colors">GlucoVision</h1>
                </Link>
                
                <nav className="flex items-center space-x-8">
                  <Link 
                    href="/" 
                    className="font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/team" 
                    className="font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Our Team
                  </Link>
                  <a 
                    href="#research" 
                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-shadow"
                  >
                    Research
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1 pt-20">{children}</main>
          <footer className="bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-600 py-8 px-4">
            <div className="container mx-auto text-center">
              <p className="font-space-grotesk">© 2024 GlucoVision</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
