import Image from "next/image";
import React from 'react';
import Layout from './layout';


export default function Home() {
  return (
    //<Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Meet GlucoVision: the cheapest non-invasive glucose monitoring device</h1>
          <p className="mt-4 text-lg">
            GlucoVision is revolutionizing diabetes management with our innovative glucose monitoring system.
          </p>
          
        </div>
      </main>
    //</Layout>
    
  );
}
