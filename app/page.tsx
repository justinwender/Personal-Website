import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-8">
      <ParticleBackground />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-text-primary">
          Justin T. Wender
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          Blockchain Researcher • Data Scientist • Creative Technologist
        </p>

        <div className="max-w-2xl mx-auto space-y-4 text-left text-text-primary">
          <p>
            I'm driven by curiosity and a passion for solving complex problems at the
            intersection of economics, technology, and decentralized systems. Currently
            pursuing a Master's degree in Economics and Data Science at Northeastern
            University, I'm building expertise in DeFi, tokenomics, and digital asset research.
          </p>

          <p>
            As President of NEU Blockchain, I lead a team dedicated to making Web3 accessible
            through rigorous research and education. My work spans protocol analysis, governance
            design, and risk assessment—always with the goal of illuminating the transformative
            potential of decentralized technologies.
          </p>

          <p>
            I thrive in collaborative environments where strong communication meets analytical
            rigor. Whether analyzing token economics, researching governance models, or building
            tools for the crypto community, I'm committed to adding value through a process-focused,
            goal-oriented approach.
          </p>
        </div>

        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <a
            href="/projects"
            className="px-6 py-3 bg-primary-green text-white rounded-lg hover:bg-primary-green-dark transition-colors"
          >
            View Projects
          </a>
          <a
            href="/writing"
            className="px-6 py-3 bg-primary-purple text-white rounded-lg hover:bg-primary-purple-light transition-colors"
          >
            Read Writing
          </a>
          <a
            href="/resume"
            className="px-6 py-3 border border-border text-text-primary rounded-lg hover:bg-background-gray transition-colors"
          >
            Download Resume
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-border text-text-primary rounded-lg hover:bg-background-gray transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
