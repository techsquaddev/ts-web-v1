import { temp1, temp2, temp3 } from "../assets";

const TemplateCard = ({ template }) => {
  return (
    <div className="bg-white cursor-pointer shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={template.coverImage}
        alt={template.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-black text-lg font-semibold">{template.name}</h3>
        <p className="text-sm text-primary">{template.description}</p>
        <div className="mt-4">
          <a
            href={template.githubLink}
            className="text-primary hover:underline mr-4"
          >
            GitHub
          </a>
          <a
            href={template.websiteLink}
            className="text-primary hover:underline"
          >
            Website
          </a>
        </div>
        <div className="mt-4">
          {template.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-bg rounded-full px-2 py-1 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const templates = [
  {
    coverImage: temp1,
    name: "Portfolio Website",
    description: "A sleek and modern portfolio website template.",
    githubLink: "https://github.com/username/portfolio-template",
    websiteLink: "https://example.com/portfolio",
    tags: ["React", "TailwindCSS", "Responsive"],
  },
  {
    coverImage: temp2,
    name: "E-commerce Website",
    description: "A fully functional e-commerce website template.",
    githubLink: "https://github.com/username/ecommerce-template",
    websiteLink: "https://example.com/ecommerce",
    tags: ["React", "TailwindCSS", "Shop"],
  },
  {
    coverImage: temp3,
    name: "E-commerce Website",
    description: "A fully functional e-commerce website template.",
    githubLink: "https://github.com/username/ecommerce-template",
    websiteLink: "https://example.com/ecommerce",
    tags: ["React", "TailwindCSS", "Shop"],
  },
];

const Templates = () => {
  return (
    <section id="templates" className="mt-7">
      <div className="p-5 bg-white rounded-3xl md:p-10">
        <h2 className="text-3xl text-black font-bold text-center mb-8">
          Web Templates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <TemplateCard key={index} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
