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
          <h1 className="text-6xl font-bold px-8">Meet GlucoVision: the world's cheapest glucose monitoring device</h1>
          <p className="mt-4 text-lg px-8">
            GlucoVision is revolutionizing diabetes management with our innovative glucose monitoring system.
          </p>   
        </section>
        <section className="bg-slate-200 w-full py-16 text-center">
        <h3 className="text-xl font-bold mb-4 text-indigo-500">ABOUT</h3>
        <p className="text-2xl mb-8 max-w-4xl mx-auto">
          We've developed the first <span className="font-bold">cheap, non-invasive</span> glucose monitoring device. The device is built as a light-weight, durable watch and it uses near-infrared spectroscopy as well as a KNN machine learning model to accurately track glucose levels. Our device costs less than $10!
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
      <section className="py-16 px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Research</h3>
        <p className="text-xl mb-8">
          We have conducted extensive research on our technology. You can read our full research paper below.
        </p>
        <div className="flex justify-center mt-8">
          <iframe
            src="/Diabetes.pdf"
            width="800"
            height="600"
            className="border"
            title="Research Paper"
          ></iframe>
        </div>
      </section>
      </main>
    //</Layout>
    
  );
}
