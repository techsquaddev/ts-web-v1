import { temp1, temp3, prod1 } from "../assets";

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
    <div className="bg-white cursor-pointer shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={product.coverImage}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-black text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-primary">{product.description}</p>
        <div className="mt-4">
          {product.tags.map((tag, index) => (
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

const products = [
  {
    coverImage: prod1,
    name: "Akuru Font Manager",
    description: "A sleek and modern portfolio website template.",
    githubLink: "https://github.com/username/portfolio-template",
    websiteLink: "https://example.com/portfolio",
    tags: ["React", "TailwindCSS", "Responsive"],
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

const Products = () => {
  return (
    <section className="mt-7">
      <div className="p-5 bg-white rounded-3xl md:p-10">
        <h2 className="text-3xl text-black font-bold text-center mb-8">
          Our Products
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
