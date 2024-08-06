import React from 'react';
import Link from 'next/link';
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
        <header className="p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="pl-4 text-4xl text-indigo-500 font-bold">GlucoVision</h1>
              <nav>
                <Link href="/team">
                  <h3 className="font-bold text-black">Our Team</h3>
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="bg-indigo-200 text-black p-4 text-center">
            © 2024 GlucoVision
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
