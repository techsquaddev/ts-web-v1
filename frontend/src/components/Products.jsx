import { useTranslation } from "react-i18next";
import { prod1, prod2 } from "../assets";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="relative bg-white cursor-pointer shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
//       <img
//         src={product.coverImage}
//         alt={product.name}
//         className="w-full h-64 object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
//       <div className="absolute bottom-0 left-0 p-4 text-white">
//         <h3 className="text-lg font-semibold">{product.name}</h3>
//         <p className="text-sm">{product.description}</p>
//         <div className="mt-2">
//           {product.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="text-xs bg-primary rounded-full px-2 py-1 mr-2"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const ProductCard = ({ product }) => {
  return (
    <>
      <a href={product.link} rel="noopener noreferrer" target="_blank">
        <div className="bg-white dark:bg-secondary cursor-pointer shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
          <img
            src={product.coverImage}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-black dark:text-white text-lg font-semibold">
              {product.name}
            </h3>
            <p className="text-sm text-primary dark:text-soft-gray">
              {product.description}
            </p>
            <div className="mt-4">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-bg dark:bg-gray text-black dark:text-white rounded-full px-2 py-1 mr-2"
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

const products = [
  {
    coverImage: prod1,
    name: "Akuru Font Manager",
    description: "A modern and interactive Sinhala font manager.",
    githubLink: "https://github.com/username/portfolio-template",
    websiteLink: "https://example.com/portfolio",
    tags: ["React", "TailwindCSS", "Responsive"],
    link: "https://akuru-client.onrender.com/",
  },
  {
    coverImage: prod2,
    name: "SLIIT Timetable App",
    description: "A user-friendly timetable management system.",
    githubLink: "https://github.com/username/ecommerce-template",
    websiteLink: "https://example.com/ecommerce",
    tags: ["React", "TailwindCSS", "Timetable"],
    link: "https://sliit360.me/",
  },
];

const Products = () => {
  const { t } = useTranslation();
  return (
    <section id="products" className="mt-7">
      <div className="p-5 bg-white dark:bg-primary rounded-3xl md:p-10">
        <h2 className="text-2xl text-gray-900 dark:text-white font-bold text-center mb-8 md:text-3xl">
          {t("products.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
