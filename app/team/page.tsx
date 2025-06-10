import Image from "next/image";
import { AnimatedSection } from "../components/AnimatedSection";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function TeamPage() {
  const leadership = [
    {
      name: "Gajan Mohan Raj",
      role: "Lead Researcher",
      bio: "Researcher at Harvard Opthalmology-AI Lab with expertise in AI and Machine Learning for Medical Imaging",
      image: "/team/gajan.jpg"
    },
    {
      name: "Shriram Vasudevan",
      role: "Lead Developer",
      bio: "Published IEEE Author and Developer of 20+ iOS apps on the App Store",
      image: "/team/shriram.jpg"
    },
    {
      name: "Sanjit Kakarla",
      role: "Lead Operations",
      bio: "Research Lead at Carnegie Mellon's Human-Computer Interaction Lab with 8+ AI published papers",
      image: "/team/sanjit.jpg"
    }
  ];

  const advisors = [
    {
      name: "PhD. Weronika Wasniowska",
      role: "Scientific Advisor",
      bio: "PhD student in Biomedical Engineering at Rutgers University School of Engineering",
      image: "/team/weronika.jpg"
    }
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-b from-white via-indigo-50/30 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            {...fadeInUp}
            className="text-center mb-20"
          >
            <span className="inline-block font-space-grotesk text-indigo-600 font-medium mb-4 px-6 py-2 bg-indigo-50 rounded-full text-lg">
              Our Team
            </span>
            <h1 className="font-outfit text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">
              Leadership Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-plus-jakarta leading-relaxed">
              Meet the innovators and experts behind GlucoVision's revolutionary technology
            </p>
          </AnimatedSection>

          <AnimatedSection
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto"
          >
            {leadership.map((member, index) => (
              <AnimatedSection
                key={member.name}
                {...fadeInUp}
                className="flex flex-col items-center group"
              >
                <div className="relative w-64 h-64 mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-space-grotesk">{member.name}</h3>
                <p className="text-indigo-600 font-medium mt-1 font-plus-jakarta">{member.role}</p>
                <p className="text-gray-600 text-center mt-4 leading-relaxed max-w-sm font-plus-jakarta">{member.bio}</p>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            {...fadeInUp}
            className="text-center mb-20"
          >
            <span className="inline-block font-space-grotesk text-purple-600 font-medium mb-4 px-6 py-2 bg-purple-50 rounded-full text-lg">
              Advisory Board
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 tracking-tight">
              Scientific Advisor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-plus-jakarta leading-relaxed">
              Distinguished expert guiding our research and development
            </p>
          </AnimatedSection>

          <AnimatedSection
            {...fadeInUp}
            className="max-w-2xl mx-auto"
          >
            {advisors.map((advisor) => (
              <AnimatedSection
                key={advisor.name}
                {...fadeInUp}
                className="flex flex-col items-center group"
              >
                <div className="relative w-72 h-72 mb-8 rounded-2xl overflow-hidden">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-space-grotesk">{advisor.name}</h3>
                <p className="text-purple-600 font-medium mt-2 font-plus-jakarta text-lg">{advisor.role}</p>
                <p className="text-gray-600 text-center mt-4 leading-relaxed max-w-xl font-plus-jakarta text-lg">{advisor.bio}</p>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
} 