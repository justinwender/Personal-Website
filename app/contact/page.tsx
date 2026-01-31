"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykjrdnd"; // You'll need to create this form at formspree.io
const RATE_LIMIT_HOURS = 1;
const RATE_LIMIT_KEY = "contact_form_last_submission";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "rate_limited">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const checkRateLimit = (): boolean => {
    const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
    if (!lastSubmission) return true;

    const lastSubmissionTime = parseInt(lastSubmission);
    const hoursSinceLastSubmission = (Date.now() - lastSubmissionTime) / (1000 * 60 * 60);

    return hoursSinceLastSubmission >= RATE_LIMIT_HOURS;
  };

  const getRemainingTime = (): string => {
    const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
    if (!lastSubmission) return "";

    const lastSubmissionTime = parseInt(lastSubmission);
    const minutesRemaining = Math.ceil(
      (RATE_LIMIT_HOURS * 60) - ((Date.now() - lastSubmissionTime) / (1000 * 60))
    );

    if (minutesRemaining > 60) {
      return `${Math.ceil(minutesRemaining / 60)} hour(s)`;
    }
    return `${minutesRemaining} minute(s)`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limit
    if (!checkRateLimit()) {
      setSubmitStatus("rate_limited");
      setErrorMessage(`Please wait ${getRemainingTime()} before submitting another message.`);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
      } else {
        setSubmitStatus("error");
        setErrorMessage("Failed to send message. Please try again or email me directly.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-background py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-text-primary">
            Get in Touch
          </h1>
          <p className="text-xl text-text-secondary">
            Let's discuss blockchain research, data science opportunities, or
            collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-green/10 rounded-lg">
                  <Mail className="text-primary-green" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:wender.j@northeastern.edu"
                    className="text-text-secondary hover:text-primary-green"
                  >
                    wender.j@northeastern.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-green/10 rounded-lg">
                  <Phone className="text-primary-green" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+19173598788"
                    className="text-text-secondary hover:text-primary-green"
                  >
                    (917) 359-8788
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-green/10 rounded-lg">
                  <MapPin className="text-primary-green" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Location
                  </h3>
                  <p className="text-text-secondary">Boston, MA</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-text-primary mb-4">
                Connect with me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/justinwender"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-card rounded-lg hover:bg-primary-green/20 transition-colors duration-200"
                >
                  <Linkedin className="text-text-primary" size={24} />
                </a>
                <a
                  href="https://github.com/justinwender"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-card rounded-lg hover:bg-primary-green/20 transition-colors duration-200"
                >
                  <Github className="text-text-primary" size={24} />
                </a>
                <a
                  href="https://x.com/wenderjustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-card rounded-lg hover:bg-primary-green/20 transition-colors duration-200"
                >
                  <svg
                    className="text-text-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/justintod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-card rounded-lg hover:bg-primary-green/20 transition-colors duration-200"
                >
                  <svg
                    className="text-text-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a
                  href="https://medium.com/@justin.wender"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-card rounded-lg hover:bg-primary-green/20 transition-colors duration-200"
                >
                  <svg
                    className="text-text-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-primary-green/10 border border-primary-green rounded-lg">
                  <p className="text-primary-green font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                  <p className="text-red-400 font-medium">{errorMessage}</p>
                </div>
              )}

              {submitStatus === "rate_limited" && (
                <div className="p-4 bg-yellow-500/10 border border-yellow-500 rounded-lg">
                  <p className="text-yellow-400 font-medium">{errorMessage}</p>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-background-card border border-border rounded-lg focus:ring-2 focus:ring-primary-green
                           focus:border-transparent outline-none transition-all duration-200 text-text-primary disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-background-card border border-border rounded-lg focus:ring-2 focus:ring-primary-green
                           focus:border-transparent outline-none transition-all duration-200 text-text-primary disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-background-card border border-border rounded-lg focus:ring-2 focus:ring-primary-green
                           focus:border-transparent outline-none transition-all duration-200 text-text-primary disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-background-card border border-border rounded-lg focus:ring-2 focus:ring-primary-green
                           focus:border-transparent outline-none transition-all duration-200 resize-none text-text-primary disabled:opacity-50"
                  placeholder="Tell me about your project, opportunity, or question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-green text-white
                         font-semibold rounded-lg hover:bg-primary-green-dark transition-colors duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
