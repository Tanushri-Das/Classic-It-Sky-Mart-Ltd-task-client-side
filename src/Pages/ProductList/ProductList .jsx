// import React, { useState } from "react";
// import "./ProductList.css";

// const ProductList = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Blue Shirt",
//       variations: {
//         color: ["Blue", "Pink"],
//         size: ["Medium", "Large"],
//       },
//       imageUrls: {
//         Blue: "https://img.freepik.com/premium-photo/portrait-casual-man-standing-with-hand-pocket-gray-wall_171337-83287.jpg",
//         Pink: "https://images.othoba.com/images/thumbs/0473271_mens-full-sleeve-casual-shirt.jpeg",
//       },
//       selectedVariations: {
//         color: "Blue",
//         size: "Medium",
//       },
//     },
//     {
//       id: 2,
//       name: "Kurti",
//       variations: {
//         color: ["Blue", "Pink"],
//         size: ["Medium", "Large"],
//       },
//       imageUrls: {
//         Blue: "https://ladyindia.com/cdn/shop/products/sukanyaa-sukanyaa-blue-chicken-kurti-product_grande.jpg?v=1571439115",
//         Pink: "https://images.meesho.com/images/products/139569193/7jfn1_512.webp",
//       },
//       selectedVariations: {
//         color: "Blue",
//         size: "Medium",
//       },
//     },
//     {
//       id: 3,
//       name: "Hoodie",
//       variations: {
//         color: ["Blue", "Pink"],
//         size: ["Medium", "Large"],
//       },
//       imageUrls: {
//         Blue: "https://assets.kogan.com/images/pertemba/PTM-UTBC461_54/1-4ddcad0367-mega-lutbc461-12.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753",
//         Pink: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/311Fr-IosnL._AC_UY1100_.jpg",
//       },
//       selectedVariations: {
//         color: "Blue",
//         size: "Medium",
//       },
//     },
//     {
//       id: 4,
//       name: "Sneakers",
//       variations: {
//         color: ["Blue", "Pink"],
//         size: ["Medium", "Large"],
//       },
//       imageUrls: {
//         Blue: "https://rukminim2.flixcart.com/image/850/1000/shoe/f/d/x/buwch-58-40-buwch-blue-original-imaergp7nquqt4xc.jpeg?q=20",
//         Pink: "https://www.jiomart.com/images/product/original/rvhpmdj0a3/shoetopia-womens-girls-pink-casual-sneakers-shoes-product-images-rvhpmdj0a3-0-202201151420.jpg?im=Resize=(500,630)",
//       },
//       selectedVariations: {
//         color: "Blue",
//         size: "Medium",
//       },
//     },
//   ];

//   // Create a map to store the selected variations for each product
//   const [selectedVariations, setSelectedVariations] = useState(
//     products.reduce((acc, product) => {
//       acc[product.id] = {
//         color: product.selectedVariations.color,
//         size: "Medium",
//       };
//       return acc;
//     }, {})
//   );

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
//     <div className="border-2 border-green-600">
//       <h1 className="text-3xl mb-8 text-center">See All products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-20">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <div className="flex justify-center">
//               <img
//                 className="h-60"
//                 src={product.imageUrls[selectedVariations[product.id].color]}
//                 alt={product.name}
//               />
//             </div>
//             <h2 className="text-center my-5 text-xl font-bold">
//               {product.name}
//             </h2>
//             <div className="flex flex-col items-center">
//               <div className="text-center mb-3">
//                 <h3 className="text-lg font-semibold">Select Color:</h3>
//                 <div className="flex">
//                   {product.variations.color.map((color) => (
//                     <label key={color} className="text-center me-2">
//                       <input
//                         type="radio"
//                         value={color}
//                         checked={selectedVariations[product.id].color === color}
//                         onChange={() => handleColorChange(product.id, color)}
//                       />
//                       {color}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="text-center mb-3">
//                 <h3 className="text-lg font-semibold">Select Size:</h3>
//                 <div className="flex">
//                   {product.variations.size.map((size) => (
//                     <label key={size} className="text-center me-2">
//                       <input
//                         type="radio"
//                         value={size}
//                         checked={selectedVariations[product.id].size === size}
//                         onChange={() => handleSizeChange(product.id, size)}
//                       />
//                       {size}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

















// import React, { useState, useEffect } from "react";
// import "./ProductList.css";
// import { Link } from "react-router-dom";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from the JSON file
//     fetch("products.json") // Update the path to your JSON file
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   const [selectedVariations, setSelectedVariations] = useState({});

//   useEffect(() => {
//     // Initialize selectedVariations with default values (blue color)
//     if (products.length > 0) {
//       const initialSelectedVariations = {};
//       products.forEach((product) => {
//         initialSelectedVariations[product.id] = {
//           color: "Blue",
//           size: "Medium", // You can set the default size here
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
//     <div className="border-2 border-green-600">
//       <h1 className="text-3xl mb-8 text-center">See All products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-20">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <div className="flex justify-center">
//               <img
//                 className="h-60"
//                 src={
//                   product.imageUrls[
//                     selectedVariations[product.id]?.color || "Blue"
//                   ]
//                 }
//                 alt={product.name}
//               />
//             </div>
//             <h2 className="text-center my-5 text-xl font-bold">
//               {product.name}
//             </h2>
//             <div className="flex flex-col items-center">
//               <div className="text-center mb-3">
//                 <h3 className="text-lg font-semibold">Select Color:</h3>
//                 <div className="flex">
//                   {product.variations.color.map((color) => (
//                     <label key={color} className="text-center me-2">
//                       <input
//                         type="radio"
//                         value={color}
//                         checked={
//                           selectedVariations[product.id]?.color === color
//                         }
//                         onChange={() => handleColorChange(product.id, color)}
//                       />
//                       {color}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="text-center mb-3">
//                 <h3 className="text-lg font-semibold">Select Size:</h3>
//                 <div className="flex">
//                   {product.variations.size.map((size) => (
//                     <label key={size} className="text-center me-2">
//                       <input
//                         type="radio"
//                         value={size}
//                         checked={selectedVariations[product.id]?.size === size}
//                         onChange={() => handleSizeChange(product.id, size)}
//                       />
//                       {size}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center my-5">
//             <Link
//               to={`/product/${product.id}`}
//               key={product.id}
//               onClick={() => handleUserClick(user)}
//             >
//               <button className="bg-sky-500 px-10 py-5 text-lg font-semibold text-white rounded-lg">Details</button>
//             </Link>
//             </div>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;





















import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the JSON file
    fetch("http://localhost:5000/products") // Update the path to your JSON file
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const [selectedVariations, setSelectedVariations] = useState({});

  useEffect(() => {
    // Initialize selectedVariations with default values (blue color)
    if (products.length > 0) {
      const initialSelectedVariations = {};
      products.forEach((product) => {
        initialSelectedVariations[product._id] = {
          color: "Blue",
          size: "Medium", // You can set the default size here
        };
      });
      setSelectedVariations(initialSelectedVariations);
    }
  }, [products]);

  const handleColorChange = (productId, color) => {
    // Allow only "Blue" and "Pink" as color variations
    if (color === "Blue" || color === "Pink") {
      setSelectedVariations((prevVariations) => ({
        ...prevVariations,
        [productId]: { ...prevVariations[productId], color },
      }));
    }
  };

  const handleSizeChange = (productId, size) => {
    // Allow only "Medium" and "Large" as size variations
    if (size === "Medium" || size === "Large") {
      setSelectedVariations((prevVariations) => ({
        ...prevVariations,
        [productId]: { ...prevVariations[productId], size },
      }));
    }
  };

  return (
    <div className="border-2 border-green-600">
      <h1 className="text-3xl mb-8 text-center">See All products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-20">
        {products.map((product) => (
          <div key={product._id} className="product">
            <div className="flex justify-center">
              <img
                className="h-60"
                src={
                  product.imageUrls[
                    selectedVariations[product._id]?.color || "Blue"
                  ]
                }
                alt={product.name}
              />
            </div>
            <h2 className="text-center my-5 text-xl font-bold">
              {product.name}
            </h2>
            <div className="flex flex-col items-center">
              <div className="text-center mb-3">
                <h3 className="text-lg font-semibold">Select Color:</h3>
                <div className="flex">
                  {product.variations.color
                    .filter((color) => ["Blue", "Pink"].includes(color))
                    .map((color) => (
                      <label key={color} className="text-center me-2">
                        <input
                          type="radio"
                          value={color}
                          checked={
                            selectedVariations[product._id]?.color === color
                          }
                          onChange={() => handleColorChange(product._id, color)}
                        />
                        {color}
                      </label>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-center mb-3">
                <h3 className="text-lg font-semibold">Select Size:</h3>
                <div className="flex">
                  {product.variations.size
                    .filter((size) => ["Medium", "Large"].includes(size))
                    .map((size) => (
                      <label key={size} className="text-center me-2">
                        <input
                          type="radio"
                          value={size}
                          checked={
                            selectedVariations[product._id]?.size === size
                          }
                          onChange={() => handleSizeChange(product._id, size)}
                        />
                        {size}
                      </label>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center my-5">
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                // Add any other necessary onClick logic here
              >
                <button className="bg-sky-500 px-10 py-5 text-lg font-semibold text-white rounded-lg">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
