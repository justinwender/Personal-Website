import { ExternalLink, BookOpen, FileText } from "lucide-react";
import { articles } from "@/data/articles";

export default function Writing() {
  // Filter articles by type
  const publications = articles.filter(
    (article) => article.type === "publication" || article.type === "research"
  );
  const blogPosts = articles.filter((article) => article.type === "blog");

  return (
    <main className="min-h-screen bg-background py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-text-primary">Writing</h1>
          <p className="text-xl text-text-secondary">
            Research papers, articles, and thoughts on blockchain, economics, and technology.
          </p>
          <p className="text-lg text-text-secondary mt-2">
            Find more of my writing on{" "}
            <a
              href="https://medium.com/@justin.wender"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-green hover:text-primary-green-dark font-medium underline"
            >
              Medium
            </a>
          </p>
        </div>

        {/* Featured Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center gap-3">
            <FileText className="text-primary-green" size={32} />
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-background-card border border-border rounded-lg p-6 hover:shadow-xl hover:shadow-primary-purple/10 transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-text-primary">{pub.title}</h3>
                      {pub.date === "In Progress" && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {pub.date}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-primary-purple mb-3">
                      {pub.publication} • {pub.date}
                    </p>
                    <p className="text-text-secondary mb-4">{pub.description}</p>
                  </div>
                  {pub.url && pub.url !== "" ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-green text-white font-semibold
                               rounded-lg hover:bg-primary-green-dark transition-colors duration-200 whitespace-nowrap"
                    >
                      Read Article
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <span className="text-text-secondary text-sm italic self-center">
                      Link coming soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center gap-3">
            <BookOpen className="text-primary-purple" size={32} />
            Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-background-card border border-border rounded-lg p-6 hover:shadow-xl hover:shadow-primary-purple/10 transition-all duration-200"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{post.title}</h3>
                    <p className="text-sm text-text-secondary italic">{post.publication} • {post.date}</p>
                  </div>
                  {post.url && post.url !== "" && (
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-green hover:text-primary-green-dark"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-text-secondary mb-4">{post.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-text-secondary mb-6">
            Want to discuss my research or collaborate on a project?
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
