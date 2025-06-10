import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./components/AnimatedSection";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleOnHover } from "./utils/animations";

export default function Home() {
  return (
    <main className="text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Text Content */}
            <AnimatedSection
              {...fadeInLeft}
              className="text-left"
              initial="visible"
            >
              <span className="inline-block font-space-grotesk text-indigo-600 font-medium mb-4 px-4 py-1 bg-indigo-50 rounded-full">
                Revolutionary Technology
              </span>
              <h1 className="font-outfit text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight">
                The Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Glucose Monitoring</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 font-plus-jakarta leading-relaxed">
                Experience the world's most affordable non-invasive glucose monitoring device
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-indigo-100">
                  <div className="text-3xl mb-2 text-indigo-600">$10</div>
                  <p className="text-gray-700 font-plus-jakarta">Most affordable solution on the market</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-indigo-100">
                  <div className="text-3xl mb-2 text-indigo-600">97%</div>
                  <p className="text-gray-700 font-plus-jakarta">Accuracy in initial trials</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-indigo-100">
                  <div className="text-3xl mb-2 text-indigo-600">24/7</div>
                  <p className="text-gray-700 font-plus-jakarta">Continuous monitoring</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-indigo-100">
                  <div className="text-3xl mb-2 text-indigo-600">0</div>
                  <p className="text-gray-700 font-plus-jakarta">Needles and invasive methods</p>
                </div>
              </div>

              <AnimatedSection
                {...scaleOnHover}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <a href="#about" className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg font-space-grotesk tracking-wide text-center">
                  Learn More
                </a>
                <a href="#research" className="w-full sm:w-auto bg-white text-indigo-600 border border-indigo-100 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all shadow-sm font-space-grotesk tracking-wide text-center">
                  View Research
                </a>
              </AnimatedSection>
            </AnimatedSection>

            {/* Right Column - Product Visualization */}
            <AnimatedSection
              {...fadeInRight}
              className="relative lg:-mr-16"
              initial="visible"
            >
              <div className="relative aspect-[4/3] w-[120%]">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full animate-pulse scale-90"></div>
                <div className="relative scale-150">
                  <Image
                    src="/device-render.png"
                    alt="GlucoVision Device"
                    width={4000}
                    height={4000}
                    className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
                
                {/* Floating Features */}
                <div className="absolute top-0 right-0 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-indigo-50 transform -translate-y-1/4 translate-x-1/4 rotate-6 hover:rotate-0 transition-transform">
                  <p className="font-space-grotesk text-indigo-600 font-medium text-xl mb-1">AI-Powered</p>
                  <p className="text-gray-600 text-lg">Advanced ML algorithms</p>
                </div>
                <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-indigo-50 transform translate-y-1/4 -translate-x-1/4 -rotate-6 hover:rotate-0 transition-transform">
                  <p className="font-space-grotesk text-purple-600 font-medium text-xl mb-1">Real-time Data</p>
                  <p className="text-gray-600 text-lg">Instant readings</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection
            {...fadeInUp}
            className="text-center mb-24"
          >
            <span className="inline-block font-space-grotesk text-indigo-600 font-medium mb-4 px-6 py-2 bg-indigo-50 rounded-full text-lg">
              How It Works
            </span>
            <h2 className="font-outfit p-8 text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">
              Cutting-Edge Innovation
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-plus-jakarta leading-relaxed">
              We've revolutionized glucose monitoring with advanced technology that's both <span className="font-semibold text-indigo-600">affordable and non-invasive</span>.
            </p>
          </AnimatedSection>

          {/* Technical Diagram */}
          <AnimatedSection
            {...fadeInUp}
            className="mb-32"
          >
            <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-indigo-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <div className="p-12">
                <Image
                  src="/flow.png"
                  alt="GlucoVision Technical Workflow"
                  width={1600}
                  height={800}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-12 border-t border-indigo-100">
                <h3 className="text-3xl font-bold mb-8 font-space-grotesk text-gray-900">Technical Workflow</h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all">
                    <h4 className="text-xl font-medium mb-4 text-indigo-600 font-space-grotesk">Data Collection</h4>
                    <p className="text-lg text-gray-600 font-plus-jakarta leading-relaxed">The device uses a 940nm LED light source and advanced sensors to collect reflected light data from the skin, which contains glucose information.</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all">
                    <h4 className="text-xl font-medium mb-4 text-indigo-600 font-space-grotesk">Processing</h4>
                    <p className="text-lg text-gray-600 font-plus-jakarta leading-relaxed">Our AFE (Analog Front End) and ADC (Analog to Digital Converter) process the raw data for precise measurements.</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all">
                    <h4 className="text-xl font-medium mb-4 text-indigo-600 font-space-grotesk">ML Analysis</h4>
                    <p className="text-lg text-gray-600 font-plus-jakarta leading-relaxed">A sophisticated machine learning model analyzes the processed data to accurately estimate glucose levels.</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all">
                    <h4 className="text-xl font-medium mb-4 text-indigo-600 font-space-grotesk">Real-time Results</h4>
                    <p className="text-lg text-gray-600 font-plus-jakarta leading-relaxed">Results are displayed instantly on the LCD screen, providing immediate glucose readings without any invasive procedures.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection {...staggerContainer} className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection
              {...fadeInLeft}
              className="space-y-8"
            >
              <div className="glass-card p-10 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-white to-indigo-50/50 border border-indigo-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-indigo-700 font-space-grotesk">Advanced Technology</h3>
                <p className="text-lg text-gray-600 font-plus-jakarta leading-relaxed">Using near-infrared spectroscopy and advanced machine learning for accurate glucose monitoring.</p>
              </div>
              <div className="glass-card p-10 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-white to-purple-50/50 border border-purple-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-700 font-space-grotesk">Affordable Solution</h3>
                <p className="text-lg text-gray-600 font-plus-jakarta leading-relaxed">Priced at less than $10, making it accessible to everyone who needs it.</p>
              </div>
              <div className="glass-card p-10 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-white to-indigo-50/50 border border-indigo-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-indigo-700 font-space-grotesk">User-Friendly Design</h3>
                <p className="text-lg text-gray-600 font-plus-jakarta leading-relaxed">Lightweight, durable watch design for comfortable all-day wear.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              {...fadeInRight}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image
                  src="/fig22.png"
                  alt="GlucoVision Device"
                  width={1000}
                  height={800}
                  className="transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Institutional Backing Section */}
      <section className="py-40 bg-gradient-to-b from-white via-indigo-50/30 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            {...fadeInUp}
            className="text-center mb-24"
          >
            <span className="inline-block font-space-grotesk text-indigo-600 font-medium mb-4 px-6 py-2 bg-indigo-50 rounded-full text-lg">
              Institutional Backing
            </span>
            <h2 className="font-outfit pb-4 text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">
              Supported by Leading Institutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-plus-jakarta leading-relaxed">
              Our groundbreaking research and technology is backed by world-renowned institutions
            </p>
          </AnimatedSection>

          <AnimatedSection
            {...staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto"
          >
            <AnimatedSection {...fadeInUp} className="flex flex-col items-center group">
              <div className="bg-white rounded-[2.5rem] p-16 shadow-lg hover:shadow-2xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300 w-full aspect-video flex items-center justify-center relative overflow-hidden group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/mit.png"
                  alt="MIT Logo"
                  width={400}
                  height={200}
                  className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-10 font-space-grotesk text-2xl font-semibold text-gray-900">MIT</h3>
              <p className="text-gray-600 text-center mt-3 font-plus-jakarta text-lg">Massachusetts Institute of Technology</p>
            </AnimatedSection>

            <AnimatedSection {...fadeInUp} className="flex flex-col items-center group">
              <div className="bg-white rounded-[2.5rem] p-16 shadow-lg hover:shadow-2xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300 w-full aspect-video flex items-center justify-center relative overflow-hidden group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/ieee.png"
                  alt="IEEE Logo"
                  width={400}
                  height={200}
                  className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-10 font-space-grotesk text-2xl font-semibold text-gray-900">IEEE</h3>
              <p className="text-gray-600 text-center mt-3 font-plus-jakarta text-lg">Institute of Electrical and Electronics Engineers</p>
            </AnimatedSection>

            <AnimatedSection {...fadeInUp} className="flex flex-col items-center group">
              <div className="bg-white rounded-[2.5rem] p-16 shadow-lg hover:shadow-2xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300 w-full aspect-video flex items-center justify-center relative overflow-hidden group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/rutgers.png"
                  alt="Rutgers University Logo"
                  width={400}
                  height={200}
                  className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-10 font-space-grotesk text-2xl font-semibold text-gray-900">Rutgers University</h3>
              <p className="text-gray-600 text-center mt-3 font-plus-jakarta text-lg">Rutgers School of Engineering</p>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="relative py-32 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection
            {...fadeInUp}
            className="text-center mb-24"
          >
            <span className="inline-block font-space-grotesk text-purple-600 font-medium mb-4 px-6 py-2 bg-purple-50 rounded-full text-lg">
              Research Paper
            </span>
            <h2 className="font-outfit text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">
              Scientific Validation
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-plus-jakarta leading-relaxed">
              Explore our comprehensive research paper detailing the technology and effectiveness of GlucoVision.
            </p>
          </AnimatedSection>

          <AnimatedSection
            {...fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-[2.5rem] shadow-xl p-12 border border-indigo-100 hover:shadow-2xl transition-shadow duration-500">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <iframe
                  src="/Diabetes.pdf"
                  className="w-full h-full rounded-2xl"
                  title="Research Paper"
                />
              </div>
              <div className="mt-12 grid sm:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
                  <h3 className="text-xl font-bold mb-3 text-indigo-700 font-space-grotesk">Key Findings</h3>
                  <p className="text-gray-600 font-plus-jakarta leading-relaxed">Our research demonstrates 97% accuracy in glucose monitoring compared to traditional invasive methods.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-100">
                  <h3 className="text-xl font-bold mb-3 text-purple-700 font-space-grotesk">Future Impact</h3>
                  <p className="text-gray-600 font-plus-jakarta leading-relaxed">Potential to revolutionize diabetes management by making glucose monitoring accessible to millions globally.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
