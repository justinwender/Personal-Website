import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Optimum VM Memory Visualization",
      category: "Data Science • Blockchain Infrastructure",
      description:
        "Interactive Shiny application for visualizing virtual machine memory allocation in blockchain infrastructure. Winner of Optimum's internal hackathon, this tool provides real-time insights into memory usage patterns and optimization opportunities.",
      tags: ["R", "Shiny", "Data Visualization", "Blockchain"],
      status: "Live",
      github: null, // Add when repo is public
      demo: null, // Add when deployed
    },
    {
      title: "Gamma Options Protocol Analysis",
      category: "DeFi Research • Tokenomics",
      description:
        "Comprehensive research analyzing Gamma's volatility-range automated market maker (AMM) for DeFi options. Deep dive into protocol mechanics, tokenomics design, liquidity provision strategies, and risk assessment. Research paper in progress.",
      tags: ["DeFi", "Options", "AMM", "Tokenomics", "Research"],
      status: "In Progress",
      github: null,
      demo: null,
    },
    {
      title: "Fireblocks Digital Asset Risk Framework",
      category: "Risk Assessment • Institutional Crypto",
      description:
        "Developed comprehensive risk assessment framework for evaluating digital assets at Fireblocks. Specialized in proof-of-stake token analysis, DeFi protocol security evaluation, and MPC wallet architecture risk modeling.",
      tags: ["Risk Management", "Proof-of-Stake", "DeFi", "Security"],
      status: "Completed",
      github: null,
      demo: null,
    },
    {
      title: "TRGC Liquid Fund Research",
      category: "Portfolio Management • Token Analysis",
      description:
        "Conducted research for a $10 million digital asset liquid fund at The Rekt Group Capital. Analyzed token fundamentals, portfolio optimization strategies, market dynamics, and developed quantitative models for asset allocation.",
      tags: ["Portfolio Optimization", "Token Analysis", "Quantitative Research"],
      status: "Completed",
      github: null,
      demo: null,
    },
    {
      title: "NEU Blockchain Governance Research",
      category: "Academic Research • Protocol Design",
      description:
        "Leading research initiative analyzing governance models in blockchain protocols. Comparative study of DAO vs. hybrid vs. centralized governance structures, examining trade-offs in decentralization, efficiency, and stakeholder alignment.",
      tags: ["Governance", "DAOs", "Protocol Design", "Research"],
      status: "In Progress",
      github: null,
      demo: null,
    },
    {
      title: "Optimum Community Content & Education",
      category: "Technical Writing • Developer Relations",
      description:
        "Creating technical explainers and educational content for the Optimum community. Topics include Random Linear Network (RLN), memory layers, blockchain infrastructure, and protocol mechanics.",
      tags: ["Technical Writing", "Education", "Community"],
      status: "Ongoing",
      github: null,
      demo: null,
    },
  ];

  return (
    <main className="min-h-screen bg-background py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-text-primary">Projects</h1>
          <p className="text-xl text-text-secondary">
            A selection of my research, development, and analysis work in blockchain, DeFi, and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-800"
                        : project.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : project.status === "Ongoing"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary-purple">{project.category}</p>
              </div>

              {/* Project Description */}
              <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-background-gray text-text-secondary text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-green hover:text-primary-green-dark
                             transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span className="font-medium">View Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-purple hover:text-primary-purple-light
                             transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
                {!project.github && !project.demo && (
                  <span className="text-text-secondary text-sm italic">
                    Links coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-text-secondary mb-6">
            Interested in collaborating or learning more about my work?
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
