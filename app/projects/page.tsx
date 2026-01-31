import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {

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
              className="bg-background-card border border-border rounded-lg p-6 hover:shadow-xl hover:shadow-primary-green/10 transition-all duration-200"
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : project.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : project.status === "Completed"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-background-dark text-text-secondary text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.githubUrl && project.githubUrl !== "" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-green hover:text-primary-green-dark
                             transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span className="font-medium">View Code</span>
                  </a>
                )}
                {project.demoUrl && project.demoUrl !== "" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-purple hover:text-primary-purple-light
                             transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
                {(!project.githubUrl || project.githubUrl === "") &&
                 (!project.demoUrl || project.demoUrl === "") && (
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
