// import React, { useState, useEffect } from "react";
// import "./Products.css";
// import { Link } from "react-router-dom";
// import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedVariations, setSelectedVariations] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://classic-it-task-server-side.vercel.app/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false); // Set loading to false after fetching data
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   useEffect(() => {
//     // Initialize selectedVariations with default values (blue color)
//     if (products.length > 0) {
//       const initialSelectedVariations = {};
//       products.forEach((product) => {
//         initialSelectedVariations[product._id] = {
//           color: "Blue",
//           size: "Small", // You can set the default size here
//         };
//       });
//       setSelectedVariations(initialSelectedVariations);
//     }
//   }, [products]);

//   const handleColorChange = (productId, color) => {
//     setSelectedVariations((prevVariations) => ({
//       ...prevVariations,
//       [productId]: { ...prevVariations[productId], color },
//     }));
//   };

//   const handleSizeChange = (productId, size) => {
//     setSelectedVariations((prevVariations) => ({
//       ...prevVariations,
//       [productId]: { ...prevVariations[productId], size },
//     }));
//   };

//   return (
//     <div className="my-12">
//       <h1 className="text-3xl mb-12 text-center font-bold">All products</h1>
//       {loading ? (
//         <CustomSpinner /> // Show the spinner while loading
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8 xl:mx-20">
//           {products.map((product) => (
//             <div key={product._id} className="product">
//               <div className="object-cover">
//                 <img
//                   src={
//                     product.imageUrls[
//                       selectedVariations[product._id]?.color || "Blue"
//                     ]
//                   }
//                   alt={product.name}
//                   className="w-full h-1/2 sm:h-96 object-contain"
//                 />
//               </div>

//               <h2 className="text-center mt-5 mb-2 text-xl font-bold">
//                 {product.name}
//               </h2>
//               <div className="flex flex-row justify-center items-center mb-3">
//                 <h3 className="text-lg font-semibold">Select Color :</h3>
//                 <div className="flex ms-2">
//                   {product.variations.color
//                     .filter((color) => ["Blue", "Pink"].includes(color))
//                     .map((colorOption) => (
//                       <div
//                         key={colorOption}
//                         onClick={() =>
//                           handleColorChange(product._id, colorOption)
//                         }
//                         className={`w-6 h-6 rounded-full mr-2 cursor-pointer ${
//                           colorOption === selectedVariations[product._id]?.color
//                             ? `border-2 border-green-500`
//                             : ""
//                         }`}
//                         style={{ backgroundColor: colorOption.toLowerCase() }}
//                       ></div>
//                     ))}
//                 </div>
//               </div>

//               <div className="flex  flex-row justify-center items-center mb-3">
//                 <h3 className="text-lg font-semibold">Select Size : </h3>
//                 <div className="flex ms-2">
//                   {product.variations.size
//                     .filter((size) => ["Small", "Medium"].includes(size))
//                     .map((sizeOption) => (
//                       <div
//                         key={sizeOption}
//                         onClick={() =>
//                           handleSizeChange(product._id, sizeOption)
//                         }
//                         className={`px-2 py-1 border rounded-full mr-2 cursor-pointer text-[16px] font-medium ${
//                           sizeOption === selectedVariations[product._id]?.size
//                             ? `border-blue-500`
//                             : ""
//                         }`}
//                       >
//                         {sizeOption}
//                       </div>
//                     ))}
//                 </div>
//               </div>
//               <div className="flex justify-center my-5">
//                 <Link to={`/product/${product._id}`} key={product._id}>
//                   <button className="bg-[#032174] px-10 py-5 text-lg font-semibold text-white rounded-lg">
//                     Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedVariations, setSelectedVariations] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://classic-it-task-server-side.vercel.app/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const initialSelectedVariations = {};
      products.forEach((product) => {
        initialSelectedVariations[product._id] = {
          color: "Blue",
          size: "Small",
        };
      });
      setSelectedVariations(initialSelectedVariations);
    }
  }, [products]);

  const handleColorChange = (productId, color) => {
    setSelectedVariations((prevVariations) => ({
      ...prevVariations,
      [productId]: { ...prevVariations[productId], color },
    }));
  };

  const handleSizeChange = (productId, size) => {
    setSelectedVariations((prevVariations) => ({
      ...prevVariations,
      [productId]: { ...prevVariations[productId], size },
    }));
  };

  return (
    <div className="my-12">
      <h1 className="text-3xl mb-12 text-center font-bold">All products</h1>
      {loading ? (
        <CustomSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-4 md:mx-8 xl:mx-20">
          {products.map((product) => (
            <div key={product._id} className="product mb-8">
              <div className="object-cover">
                <img
                  src={
                    product.imageUrls[
                      selectedVariations[product._id]?.color || "Blue"
                    ]
                  }
                  alt={product.name}
                  className="w-full h-1/2 sm:h-96 object-contain"
                />
              </div>

              <h2 className="text-center mt-5 mb-2 text-lg sm:text-xl font-bold">
                {product.name}
              </h2>

              <div className="flex flex-row justify-center items-center mb-3">
                <h3 className="text-base sm:text-lg font-semibold">
                  Select Color:
                </h3>
                <div className="flex ms-2">
                  {product.variations.color
                    .filter((color) => ["Blue", "Pink"].includes(color))
                    .map((colorOption) => (
                      <div
                        key={colorOption}
                        onClick={() =>
                          handleColorChange(product._id, colorOption)
                        }
                        className={`w-6 h-6 rounded-full mr-2 cursor-pointer ${
                          colorOption === selectedVariations[product._id]?.color
                            ? `border-2 border-green-500`
                            : ""
                        }`}
                        style={{ backgroundColor: colorOption.toLowerCase() }}
                      ></div>
                    ))}
                </div>
              </div>

              <div className="flex  flex-row justify-center items-center mb-3">
                <h3 className="text-base sm:text-lg font-semibold">
                  Select Size:
                </h3>
                <div className="flex ms-2">
                  {product.variations.size
                    .filter((size) => ["Small", "Medium"].includes(size))
                    .map((sizeOption) => (
                      <div
                        key={sizeOption}
                        onClick={() =>
                          handleSizeChange(product._id, sizeOption)
                        }
                        className={`px-2 py-1 border rounded-full mr-2 cursor-pointer text-[14px] sm:text-[16px] font-medium ${
                          sizeOption === selectedVariations[product._id]?.size
                            ? `border-blue-500`
                            : ""
                        }`}
                      >
                        {sizeOption}
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex justify-center my-5">
                <Link to={`/product/${product._id}`} key={product._id}>
                  <button className="bg-[#032174] px-8 py-4 text-base sm:text-lg font-semibold text-white rounded-lg">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
