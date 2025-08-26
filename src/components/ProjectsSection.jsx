import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EduSwap – Skill Exchange Platform",
    description:
      "A web platform for users to exchange skills and knowledge. Features user authentication, profile management, and responsive UI built using React, Node.js, MongoDB, and Tailwind CSS.",
    image: "/projects/project1.png.png",
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "JWT"],
    demoUrl: "https://eduswap-psi.vercel.app/", // Add actual link here
    githubUrl: "https://github.com/sandhiajaykumar/eduswap-main", // Add GitHub link here
  },
  {
    id: 2,
    title: "Freelancing Platform",
    description:
      "A full-stack platform where users can post jobs, hire freelancers, and communicate in real-time. Built with Node.js, Express.js, MongoDB, and deployed on Render.",
    image: "/projects/project2.png.png",
    tags: ["Node.js", "Express.js", "MongoDB", "React", "Render"],
    demoUrl: "#", // Add actual link here
    githubUrl: "#", // Add GitHub link here
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume analysis tool built using React, React Router, and Puter.js. It evaluates resumes based on job descriptions using Claude Sonnet 4 AI.",
    image: "/projects/project3.png.png",
    tags: ["React", "Puter.js", "TailwindCSS", "Claude AI"],
    demoUrl: "https://ai-resume-analyzer-seven-ashy.vercel.app/", // Add actual link here
    githubUrl: "https://github.com/ErenYeager183/ai-resume-analyzer", // Add GitHub link here
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ErenYeager183"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
