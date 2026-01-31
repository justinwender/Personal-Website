import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Resume() {
  return (
    <main className="min-h-screen bg-background py-24 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Download Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
          <div>
            <h1 className="text-5xl font-bold mb-2 text-text-primary">Resume</h1>
            <p className="text-xl text-text-secondary">
              Blockchain Researcher • Data Scientist • Creative Technologist
            </p>
          </div>
          <a
            href="/Wender_Justin_Resume.pdf"
            download="Justin_Wender_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-primary-green text-white font-semibold
                     rounded-lg hover:bg-primary-green-dark transition-colors duration-200 whitespace-nowrap"
          >
            <Download size={20} />
            Download PDF
          </a>
        </div>

        <div className="bg-background-card border border-border rounded-lg p-8 space-y-8">
          {/* Contact Information */}
          <section>
            <div className="flex flex-wrap gap-6 text-text-secondary">
              <a href="mailto:wender.j@northeastern.edu" className="flex items-center gap-2 hover:text-primary-green">
                <Mail size={18} />
                wender.j@northeastern.edu
              </a>
              <a href="tel:+19173598788" className="flex items-center gap-2 hover:text-primary-green">
                <Phone size={18} />
                (917) 359-8788
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                Boston, MA
              </span>
              <a
                href="https://linkedin.com/in/justinwender"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-green"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/justinwender"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-green"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </section>

          <hr className="border-border" />

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-1">
                  <h3 className="font-bold text-text-primary">Northeastern University</h3>
                  <span className="text-text-secondary">Boston, MA</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <p className="text-text-secondary">Master of Science in Economics and Data Science</p>
                  <span className="text-text-secondary">Expected May 2026</span>
                </div>
                <p className="text-text-secondary mt-1">GPA: 3.9/4.0</p>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-1">
                  <h3 className="font-bold text-text-primary">The University of Pennsylvania</h3>
                  <span className="text-text-secondary">Philadelphia, PA</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <p className="text-text-secondary">Bachelor of Arts in Politics, Philosophy, and Economics</p>
                  <span className="text-text-secondary">May 2023</span>
                </div>
                <p className="text-text-secondary mt-1">Magna Cum Laude • GPA: 3.9/4.0</p>
              </div>
            </div>
          </section>

          <hr className="border-border" />

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-text-primary">Data Science Fellow</h3>
                    <p className="text-text-secondary">Optimum</p>
                  </div>
                  <span className="text-text-secondary">January 2025 - Present</span>
                </div>
                <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                  <li>Built interactive Shiny application for visualizing virtual machine memory allocation</li>
                  <li>Won internal hackathon for innovative blockchain infrastructure visualization tool</li>
                  <li>Created technical content and educational materials for community engagement</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-text-primary">Research Analyst</h3>
                    <p className="text-text-secondary">The Rekt Group Capital (TRGC)</p>
                  </div>
                  <span className="text-text-secondary">September 2024 - December 2024</span>
                </div>
                <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                  <li>Conducted research for $10M digital asset liquid fund</li>
                  <li>Analyzed token fundamentals, portfolio optimization, and market dynamics</li>
                  <li>Developed quantitative models for asset allocation and risk assessment</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-text-primary">Research Analyst</h3>
                    <p className="text-text-secondary">Fireblocks</p>
                  </div>
                  <span className="text-text-secondary">May 2024 - August 2024</span>
                </div>
                <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                  <li>Developed comprehensive risk assessment framework for digital assets</li>
                  <li>Specialized in proof-of-stake tokens, DeFi protocols, and MPC wallet security</li>
                  <li>Created evaluation criteria for institutional-grade custody solutions</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-text-primary">President</h3>
                    <p className="text-text-secondary">Northeastern Blockchain Club</p>
                  </div>
                  <span className="text-text-secondary">September 2024 - Present</span>
                </div>
                <ul className="list-disc list-inside text-text-secondary space-y-1 ml-2">
                  <li>Lead 12-person executive board coordinating research and educational initiatives</li>
                  <li>Direct projects in protocol analysis, governance design, and tokenomics research</li>
                  <li>Organize events, workshops, and speaker series on blockchain technology</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border" />

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Technical Skills</h3>
                <p className="text-text-secondary">
                  Python, R, SQL, Solidity, JavaScript, React, Next.js, Shiny, Git, Stata, Excel
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Research Areas</h3>
                <p className="text-text-secondary">
                  Tokenomics, DeFi Protocols, Governance Design, Risk Assessment, Portfolio Optimization,
                  Econometric Analysis
                </p>
              </div>
            </div>
          </section>

          <hr className="border-border" />

          {/* Publications */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Publications</h2>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <strong className="text-text-primary">
                  "Communication—The Often-Overlooked Keystone to M&A"
                </strong>{" "}
                — The Legal Intelligencer
              </li>
              <li>
                <strong className="text-text-primary">"AI Use Is Exploding"</strong> — The Legal Intelligencer
              </li>
              <li>
                <strong className="text-text-primary">
                  "Gamma Options Protocol Analysis"
                </strong>{" "}
                — Research paper in progress
              </li>
            </ul>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-text-secondary mb-6">
            Interested in working together or have questions?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-green text-white font-semibold rounded-lg
                     hover:bg-primary-green-dark transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
