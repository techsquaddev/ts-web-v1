import { useTranslation } from "react-i18next";
import { prod1, prod2, prod3, prod4, prod5, prod6 } from "../assets";

const ProjectCard = ({ project }) => {
  return (
    <>
      <a href={project.link} rel="noopener noreferrer" target="_blank">
        <div className="bg-white dark:bg-secondary cursor-pointer shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-200">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-zinc-900 dark:text-white text-lg font-semibold">
              {project.name}
            </h3>
            <p className="text-sm text-primary dark:text-zinc-200">
              {project.description}
            </p>
            <div className="mt-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-bg dark:bg-zinc-600 text-zinc-900 dark:text-white rounded-full px-2 py-1 mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

const projects = [
  {
    coverImage: prod1,
    name: "Akuru Font Manager",
    description: "A modern and interactive Sinhala font manager.",
    tags: ["React.js", "TailwindCSS", "MongoDB"],
    link: "https://akuru-client.onrender.com/",
  },
  {
    coverImage: prod2,
    name: "SLIIT FOC Timetable App",
    description: "A user-friendly timetable management system.",
    tags: ["React.js", "TailwindCSS", "Timetable"],
    link: "https://sliit360.me/",
  },
  {
    coverImage: prod3,
    name: "Tech Path Predictor",
    description: "An ML-powered tech career path prediction app.",
    tags: ["Next.js", "TailwindCSS", "Machine Learning"],
    link: "https://devpath-app.vercel.app/",
  },
  {
    coverImage: prod4,
    name: "Tea Export Enhancement Portal",
    description: "An ML-powered tea export prediction and enhancement system.",
    tags: ["React.js", "TailwindCSS", "Flask"],
    link: "https://theguard.netlify.app/",
  },
  {
    coverImage: prod5,
    name: "CEB Welfare Application",
    description:
      "A dedicated welfare system for the CEB Welfare Society (WPS II).",
    tags: ["React.js", "TailwindCSS", "MongoDB"],
    link: "https://cebwelfare.netlify.app/",
  },
  {
    coverImage: prod6,
    name: "Portfolio Website",
    description: "A fully responsive, modern, and sleek portfolio website.",
    tags: ["React.js", "TailwindCSS", "Framer Motion"],
    link: "https://www.dpliyanagama.me/",
  },
];

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="mt-7">
      <div className="p-5 bg-white dark:bg-primary rounded-3xl md:p-10">
        <h2 className="text-2xl text-gray-900 dark:text-white font-bold text-center mb-8 md:text-3xl">
          {t("projects.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
