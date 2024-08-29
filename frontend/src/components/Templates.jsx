import { useTranslation } from "react-i18next";
import { temp1, temp2, temp3 } from "../assets";
import { GitHub, Language } from "@mui/icons-material";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const TemplateCard = ({ template }) => {
  return (
    <div className="bg-white dark:bg-[#444444] cursor-pointer shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={template.coverImage}
        alt={template.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-black dark:text-white text-lg font-semibold">
          {template.name}
        </h3>
        <p className="text-sm text-primary dark:text-soft-gray">
          {template.description}
        </p>
        <div className="mt-4">
          <a
            href={template.githubLink}
            className="text-primary dark:text-white mr-4"
          >
            <GitHub />
          </a>
          <a
            href={template.websiteLink}
            className="text-primary dark:text-white"
          >
            <Language />
          </a>
        </div>
        <div className="mt-4">
          {template.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-bg dark:bg-secondary text-black dark:text-white rounded-full px-2 py-1 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const TemplatePage = ({ template }) => {
  return (
    <div className="p-5 pt-10">
      <img
        src={template.coverImage}
        alt={template.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-5 text-black dark:text-white">
        {template.name}
      </h1>
      <p className="mt-2 text-primary dark:text-soft-gray">
        {template.longDesc}
      </p>
      <div className="mt-6 flex">
        <a
          href={template.githubLink}
          className="text-primary dark:text-white mr-4"
        >
          <GitHub />
        </a>
        <a href={template.websiteLink} className="text-primary dark:text-white">
          <Language />
        </a>
      </div>
      <div className="mt-6">
        {template.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-bg dark:bg-secondary text-black dark:text-white rounded-full px-2 py-1 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const templates = [
  {
    coverImage: temp1,
    name: "Portfolio Website",
    description: "A sleek and modern portfolio website template.",
    longDesc: "A sleek and modern portfolio website template.",
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
  const { t } = useTranslation();
  return (
    <section id="templates" className="mt-7">
      <div className="p-5 bg-white dark:bg-primary rounded-3xl md:p-10">
        <h2 className="text-2xl text-black dark:text-white font-bold text-center mb-8 md:text-3xl">
          {t("templates.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <Dialog>
              <DialogTrigger className="text-left">
                <TemplateCard key={index} template={template} />
              </DialogTrigger>
              <DialogContent className="m-0 p-0 bg-white dark:bg-primary max-w-[90%] border-none rounded-2xl md:max-w-[50%]">
                <TemplatePage key={index} template={template} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
