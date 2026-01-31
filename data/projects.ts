/**
 * Projects Configuration
 *
 * Edit this file to add, remove, or update projects displayed on the Projects page.
 * Simply add or modify project objects in the array below.
 */

export interface Project {
  title: string;
  status: "Active" | "In Progress" | "Completed" | "Archived";
  tags: string[];
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  detailsUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Optimum VM Memory Tracker",
    status: "Active",
    tags: ["R", "Shiny", "Data Visualization", "Blockchain Infrastructure"],
    description:
      "Built a Shiny (R) app to visualize real-time VM memory transfers between proxies using logs, metrics, and traces from Optimum's P2P memory layer. Benchmarked performance against GossipSub to demonstrate reduced data transfer latency across nodes.",
    githubUrl: "", // Add GitHub URL when available
    demoUrl: "", // Add demo URL when available
  },
  {
    title: "Gamma Options Protocol",
    status: "Active",
    tags: ["DeFi", "Options Trading", "Research", "Quantitative Analysis"],
    description:
      "Currently conducting comprehensive research on Gamma's decentralized options protocol, analyzing liquidity mechanisms, pricing models, and market efficiency. Developing quantitative framework for evaluating on-chain options platforms.",
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "Fireblocks Asset Research",
    status: "Completed",
    tags: ["Risk Assessment", "Institutional Custody", "PoS", "DeFi"],
    description:
      "Conducted full-scale risk assessments on 18 digital assets for NYDFS cold custody self-certification. Utilized quantitative methods to identify key risks and establish comprehensive evaluation criteria for certifying digital assets to institutional-grade custody.",
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "TRGC Digital Asset Analysis",
    status: "Completed",
    tags: ["Research", "Tokenomics", "Portfolio Management"],
    description:
      "Drafted and finalized pitch deck for $10 million liquid fund. Led discovery of small-cap digital assets, researching liquidity, exits, and yield opportunities from 20+ startup tokens. Evaluated 10+ mid-large cap assets for signs of undervaluation.",
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "NEU Blockchain Research",
    status: "Active",
    tags: ["Research", "Governance", "Tokenomics", "Education"],
    description:
      "Leading research initiatives as President of Northeastern University Blockchain Club. Directing six-member research team exploring comparative effectiveness of fiat, commodity-backed, and decentralized currencies through quantitative frameworks integrating economics and game theory.",
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "Optimum Community Content",
    status: "Active",
    tags: ["Technical Writing", "Community", "Education"],
    description:
      "Creating technical explainers, summaries, and breakdowns for Optimum's 240,000-member online community. Topics include Random Linear Network Coding (RLNC), virtual machines, and memory layers for decentralized infrastructure. Engaging with community through Medium, X, Reddit, and Discord.",
    githubUrl: "",
    demoUrl: "",
  },
];
