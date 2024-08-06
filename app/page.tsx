import Image from "next/image";
import React from 'react';
import Layout from './layout';



export default function Home() {
  return (
    //<Layout>
      <main className="text-black flex min-h-screen flex-col items-center justify-between py-5">
        <section className="p-4">
          <Image
            src="/fig19.png"
            alt="Figure 19"
            width={500} // specify the width of the image
            height={300} // specify the height of the image
            className="mx-auto mb-5"
          />
          <h1 className="text-6xl font-bold">Meet GlucoVision: the world's cheapest glucose monitoring device</h1>
          <p className="mt-4 text-lg">
            GlucoVision is revolutionizing diabetes management with our innovative glucose monitoring system.
          </p>   
        </section>
        <section className="bg-slate-200 w-full py-16 text-center">
        <h3 className="text-xl font-bold mb-4 text-rose-500">ABOUT</h3>
        <p className="text-2xl mb-8 max-w-4xl mx-auto">
          We've developed the first <span className="font-bold">accurate</span> and <span className="font-bold">scalable</span> webcam eye-tracking system. It's now publicly available, and we've applied it ourselves to build software for brain health assessment, neuropharma research, and mental wellness monitoring.
        </p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <Image
              src="/fig22.png" // update with your image path
              alt="Eye Tracking System"
              width={800} // specify the width of the image
              height={450} // specify the height of the image
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      </main>
    //</Layout>
    
  );
}
