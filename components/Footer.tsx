import { Github, Linkedin, Send, Twitter, FileText } from "lucide-react";

/**
 * Footer component
 *
 * Site-wide footer with social media links and quick navigation.
 * Icons link to: Medium, LinkedIn, GitHub, X (Twitter), Telegram
 */
export default function Footer() {
  const socialLinks = [
    {
      name: "Medium",
      href: "https://medium.com/@justin.wender",
      icon: FileText,
      label: "Read my articles on Medium",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/justinwender",
      icon: Linkedin,
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      href: "https://github.com/justinwender",
      icon: Github,
      label: "View my code on GitHub",
    },
    {
      name: "Twitter",
      href: "https://x.com/wenderjustin",
      icon: Twitter,
      label: "Follow me on X (Twitter)",
    },
    {
      name: "Telegram",
      href: "https://t.me/justintod",
      icon: Send,
      label: "Message me on Telegram",
    },
  ];

  return (
    <footer className="w-full border-t border-border bg-background py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-secondary hover:text-primary-green transition-colors duration-200 hover:scale-110 transform"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap gap-6 text-sm text-text-secondary justify-center">
            <a href="/" className="hover:text-text-primary transition-colors">
              Home
            </a>
            <a
              href="/about"
              className="hover:text-text-primary transition-colors"
            >
              About
            </a>
            <a
              href="/projects"
              className="hover:text-text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="/writing"
              className="hover:text-text-primary transition-colors"
            >
              Writing
            </a>
            <a
              href="/resume"
              className="hover:text-text-primary transition-colors"
            >
              Resume
            </a>
            <a
              href="/contact"
              className="hover:text-text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Justin T. Wender. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
