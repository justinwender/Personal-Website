export default function About() {
  return (
    <main className="min-h-screen bg-background py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-text-primary">
          About Me
        </h1>

        <div className="space-y-8 text-lg text-text-secondary leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Hello! I'm Justin.
            </h2>
            <p>
              I'm a blockchain researcher and data scientist driven by curiosity and a passion for solving complex problems
              at the intersection of economics, technology, and decentralized systems. Currently, I'm pursuing a Master of
              Science in Economics and Data Science at Northeastern University, where I serve as President of the Northeastern
              Blockchain Club.
            </p>
          </section>

          {/* Academic Journey */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Academic Journey
            </h2>
            <p>
              My academic path began with a Bachelor of Arts in Politics, Philosophy, and Economics from The University of
              Pennsylvania, graduating magna cum laude with a 3.9 GPA. The interdisciplinary nature of PPE sparked my interest
              in how economic incentives shape human behavior and institutional design—questions that would later draw me to
              blockchain technology.
            </p>
            <p className="mt-4">
              I'm currently completing my MS in Economics and Data Science at Northeastern University (expected May 2026),
              maintaining a 3.9 GPA while leading research initiatives and contributing to the academic blockchain community.
              This combination of economic theory and quantitative methods provides the perfect foundation for analyzing
              decentralized systems and token economics.
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Professional Experience
            </h2>
            <p>
              My professional journey in crypto and data science has taken me through several innovative organizations:
            </p>
            <ul className="mt-4 space-y-4 list-none">
              <li>
                <strong className="text-text-primary">Optimum</strong> — As a Data Science Fellow, I'm building tools
                to visualize and analyze blockchain infrastructure, including a hackathon-winning Shiny application for
                virtual machine memory visualization.
              </li>
              <li>
                <strong className="text-text-primary">The Rekt Group Capital (TRGC)</strong> — Conducted research for
                a $10 million digital asset liquid fund, analyzing token fundamentals, portfolio optimization strategies,
                and market dynamics.
              </li>
              <li>
                <strong className="text-text-primary">Fireblocks</strong> — Developed comprehensive risk assessment
                frameworks for digital assets, specializing in proof-of-stake tokens, DeFi protocols, and MPC wallet
                security architecture.
              </li>
            </ul>
          </section>

          {/* Research & Leadership */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Research & Leadership
            </h2>
            <p>
              As President of the Northeastern Blockchain Club, I lead a 12-person board and coordinate research initiatives
              that make Web3 accessible and understandable. Our work spans protocol analysis, governance design, tokenomics,
              and risk assessment. I'm passionate about bridging the gap between complex blockchain concepts and practical
              applications.
            </p>
            <p className="mt-4">
              My research interests include tokenomics design, governance mechanisms (DAO vs. hybrid vs. centralized models),
              digital asset risk frameworks, and DeFi protocol mechanics. I've published articles on M&A communication and
              AI adoption in The Legal Intelligencer, and I'm currently working on a research paper analyzing the Gamma
              Options protocol.
            </p>
          </section>

          {/* Skills & Expertise */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Technical Skills</h3>
                <p className="text-base">
                  Python, R, SQL, Solidity, JavaScript, React, Next.js, Shiny, Git, Stata, Excel
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Research Areas</h3>
                <p className="text-base">
                  Tokenomics, DeFi protocols, Governance design, Risk assessment, Portfolio optimization,
                  Econometric analysis
                </p>
              </div>
            </div>
          </section>

          {/* Looking Forward */}
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Looking Forward
            </h2>
            <p>
              I thrive in collaborative, fast-paced environments where I can apply rigorous analysis to emerging technologies.
              Whether I'm analyzing tokenomics, researching governance structures, building data visualization tools, or
              writing about blockchain innovations, I'm committed to adding value through a process-focused, goal-oriented
              approach.
            </p>
            <p className="mt-4">
              I'm actively seeking opportunities in the crypto industry—whether at startups, VCs, fintechs like Coinbase,
              or asset managers like Grayscale—as well as data science roles in quant finance, consulting, or research.
              If you're working on challenging problems at the intersection of economics, technology, and decentralized
              systems, I'd love to connect.
            </p>
          </section>

          {/* Call to Action */}
          <section className="pt-8 border-t border-gray-200">
            <p className="text-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-primary-green text-white font-semibold rounded-lg
                         hover:bg-primary-green-dark transition-colors duration-200"
              >
                Get in Touch
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
