/**
 * Articles & Publications Configuration
 *
 * Edit this file to add, remove, or update articles and publications
 * displayed on the Writing page.
 */

export interface Article {
  title: string;
  publication: string;
  date: string;
  description: string;
  url?: string;
  type: "publication" | "blog" | "research";
}

export const articles: Article[] = [
  // Publications
  {
    title: "Communication—The Often-Overlooked Keystone to M&A",
    publication: "The Legal Intelligencer",
    date: "2023",
    description:
      "Explored the critical role of effective communication in successful mergers and acquisitions, examining how clear stakeholder engagement drives deal success.",
    url: "", // Add URL when available
    type: "publication",
  },
  {
    title: "AI Use Is Exploding",
    publication: "The Legal Intelligencer",
    date: "2023",
    description:
      "Analyzed the rapid adoption of artificial intelligence in legal practice and business operations, discussing implications for professional services.",
    url: "", // Add URL when available
    type: "publication",
  },
  {
    title: "Blockchain Technology and the Future of Legal Practice",
    publication: "The Legal Intelligencer",
    date: "2023",
    description:
      "Examined how blockchain technology is transforming legal services, from smart contracts to digital identity verification and regulatory compliance.",
    url: "", // Add URL when available
    type: "publication",
  },

  // Research Papers
  {
    title: "Gamma Options Protocol Analysis",
    publication: "Independent Research",
    date: "In Progress",
    description:
      "Comprehensive analysis of Gamma's decentralized options protocol, evaluating liquidity mechanisms, pricing efficiency, and market structure.",
    url: "",
    type: "research",
  },

  // Blog Posts (examples - update with actual posts)
  {
    title: "Understanding Tokenomics: A Game Theory Perspective",
    publication: "Medium",
    date: "Coming Soon",
    description:
      "Applying game theory principles to analyze token design, incentive structures, and long-term protocol sustainability.",
    url: "",
    type: "blog",
  },
  {
    title: "DeFi Risk Assessment Framework",
    publication: "Medium",
    date: "Coming Soon",
    description:
      "A systematic approach to evaluating risks in decentralized finance protocols, from smart contract vulnerabilities to economic attack vectors.",
    url: "",
    type: "blog",
  },
  {
    title: "The Evolution of Layer 2 Scaling Solutions",
    publication: "Medium",
    date: "Coming Soon",
    description:
      "Comparing rollups, validiums, and other L2 approaches, analyzing trade-offs in security, scalability, and decentralization.",
    url: "",
    type: "blog",
  },
];
