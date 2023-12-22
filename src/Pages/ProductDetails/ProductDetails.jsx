// import React, { useState, useEffect } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const individualProductData = useLoaderData();
//   console.log("individualProductData", individualProductData);

//   const [selectedColor, setSelectedColor] = useState(
//     individualProductData.selectedVariations.color || "Blue"
//   );
//   const [selectedSize, setSelectedSize] = useState(
//     individualProductData.selectedVariations.size || "Medium"
//   );

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//   };

//   return (
//     <div className="flex justify-center items-center">
//       {individualProductData ? (
//         <div className="max-w-md p-8 bg-white shadow-md">
//           <img
//             src={individualProductData.imageUrls[selectedColor]}
//             alt={individualProductData.name}
//             className="w-full h-60 object-cover mb-6"
//           />
//           <h2 className="text-2xl font-semibold mb-4">
//             {individualProductData.name}
//           </h2>
//           <p className="text-gray-600 mb-4">Selected Color: {selectedColor}</p>
//           <div className="flex mb-4">
//             <p className="text-gray-600 mr-2">Available Colors:</p>
//             {individualProductData.variations.color.map((colorOption) => (
//               <div
//                 key={colorOption}
//                 onClick={() => setSelectedColor(colorOption)}
//                 className={`w-6 h-6 rounded-full mr-2 cursor-pointer ${
//                   colorOption === selectedColor
//                     ? `border-2 border-green-500`
//                     : ""
//                 }`}
//                 style={{ backgroundColor: colorOption.toLowerCase() }}
//               ></div>
//             ))}
//           </div>
//           <div className="flex mb-4">
//             <p className="text-gray-600 mr-2">Available Sizes:</p>
//             {individualProductData.variations.size.map((sizeOption) => (
//               <div
//                 key={sizeOption}
//                 onClick={() => handleSizeChange(sizeOption)}
//                 className={`px-2 py-1 border rounded-full mr-2 cursor-pointer ${
//                   sizeOption === selectedSize ? `border-blue-500` : ""
//                 }`}
//               >
//                 {sizeOption}
//               </div>
//             ))}
//           </div>
//           {/* Add more product details here */}
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
//             Add to Cart
//           </button>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

















// import React, { useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
// import "./Modal.css";
// import Swal from "sweetalert2";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const individualProductData = useLoaderData();
//   console.log("individualProductData", individualProductData);

//   const [selectedColor, setSelectedColor] = useState(
//     individualProductData.selectedVariations.color || "Blue"
//   );
//   const [selectedSize, setSelectedSize] = useState(
//     individualProductData.selectedVariations.size || "Medium"
//   );
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//   };

//   const handleAddToCart = () => {
//     // Perform any logic you need before adding to the cart
//     // Open the modal
//     setIsModalOpen(true);
//   };

//   const handleSubmit = () => {
//     const order = {
//       UserName: user.displayName,
//       email: user.email,
//       productName: individualProductData.name,
//       SelectedColor: selectedColor,
//       SelectedSize: selectedSize,
//     };
//     console.log("Order:", order);
//     fetch("http://localhost:5000/orders", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(order),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // Close the modal
//         console.log(data);
//         setIsModalOpen(false);
//         Swal.fire({
//           title: "Good job!",
//           text: "Congratulations! Order Confirmed!",
//           icon: "success",
//           timer: 1500, // Close after 1500 milliseconds (1.5 seconds)
//           showConfirmButton: false, // Hide the "OK" button
//         });
//       });
//   };

//   return (
//     <div className="flex justify-center items-center">
//       {individualProductData ? (
//         <div className="max-w-md p-8 bg-white shadow-md relative">
//           <img
//             src={individualProductData.imageUrls[selectedColor]}
//             alt={individualProductData.name}
//             className="w-full h-60 object-cover mb-6"
//           />
//           <h2 className="text-2xl font-semibold mb-4">
//             {individualProductData.name}
//           </h2>
//           <p className="text-gray-600 mb-4">Selected Color: {selectedColor}</p>
//           <div className="flex mb-4">
//             <p className="text-gray-600 mr-2">Available Colors:</p>
//             {individualProductData.variations.color.map((colorOption) => (
//               <div
//                 key={colorOption}
//                 onClick={() => setSelectedColor(colorOption)}
//                 className={`w-6 h-6 rounded-full mr-2 cursor-pointer ${
//                   colorOption === selectedColor
//                     ? `border-2 border-green-500`
//                     : ""
//                 }`}
//                 style={{ backgroundColor: colorOption.toLowerCase() }}
//               ></div>
//             ))}
//           </div>
//           <div className="flex mb-4">
//             <p className="text-gray-600 mr-2">Available Sizes:</p>
//             {individualProductData.variations.size.map((sizeOption) => (
//               <div
//                 key={sizeOption}
//                 onClick={() => handleSizeChange(sizeOption)}
//                 className={`px-2 py-1 border rounded-full mr-2 cursor-pointer ${
//                   sizeOption === selectedSize ? `border-blue-500` : ""
//                 }`}
//               >
//                 {sizeOption}
//               </div>
//             ))}
//           </div>
//           {/* Add more product details here */}
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-full"
//             onClick={handleAddToCart}
//           >
//             Add to Cart
//           </button>

//           {/* Modal Overlay */}
//           {isModalOpen && (
//             <div
//               className="overlay open"
//               onClick={() => setIsModalOpen(false)}
//             ></div>
//           )}

//           {/* Modal */}
//           {isModalOpen && (
//             <div className="modal open">
//               <h3 className="text-2xl font-semibold mb-4">Cart Modal</h3>
//               <hr className="my-3" />
//               <div className="mb-1 text-start flex flex-col">
//                 <label
//                   htmlFor="ServiceName"
//                   className="block text-black text-lg font-semibold mb-1"
//                 >
//                   User Name
//                 </label>
//                 <input
//                   type="text"
//                   value={user.displayName}
//                   className="form-input w-full text-[16px] font-medium"
//                   readOnly
//                 />
//               </div>
//               <div className="mb-1 text-start flex flex-col">
//                 <label
//                   htmlFor="ServiceName"
//                   className="block text-black text-lg font-semibold mb-1"
//                 >
//                   User Email
//                 </label>
//                 <input
//                   type="text"
//                   value={user.email}
//                   className="form-input w-full text-[16px] font-medium"
//                   readOnly
//                 />
//               </div>
//               <div className="mb-1 text-start flex flex-col">
//                 <label
//                   htmlFor="ServiceName"
//                   className="block text-black text-lg font-semibold mb-1"
//                 >
//                   Product Name
//                 </label>
//                 <input
//                   type="text"
//                   value={individualProductData.name}
//                   className="form-input w-full text-[16px] font-medium"
//                   readOnly
//                 />
//               </div>
//               <div className="mb-1 text-start flex flex-col">
//                 <label
//                   htmlFor="ServiceName"
//                   className="block text-black text-lg font-semibold mb-1"
//                 >
//                   Selected Color
//                 </label>
//                 <input
//                   type="text"
//                   value={selectedColor}
//                   className="form-input w-full text-[16px] font-medium"
//                   readOnly
//                 />
//               </div>
//               <div className="mb-1 text-start flex flex-col">
//                 <label
//                   htmlFor="ServiceName"
//                   className="block text-black text-lg font-semibold mb-1"
//                 >
//                   Selected Size
//                 </label>
//                 <input
//                   type="text"
//                   value={selectedSize}
//                   className="form-input w-full text-[16px] font-medium"
//                   readOnly
//                 />
//               </div>

//               <div className="flex justify-center mt-4">
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold"
//                   onClick={handleSubmit}
//                 >
//                   Submit
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded-full ml-2 text-lg font-semibold"
//                   onClick={() => setIsModalOpen(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

























import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Modal.css";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const individualProductData = useLoaderData();
  console.log("individualProductData", individualProductData);

  const initialColor =
    individualProductData.selectedVariations.color || "Blue";
  const initialSize =
    individualProductData.selectedVariations.size || "Medium";

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    // Perform any logic you need before adding to the cart
    // Open the modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Reset selected color and size to initial values when closing the modal
    setSelectedColor(initialColor);
    setSelectedSize(initialSize);
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    const order = {
      UserName: user.displayName,
      email: user.email,
      productName: individualProductData.name,
      SelectedColor: selectedColor,
      SelectedSize: selectedSize,
    };
    console.log("Order:", order);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // Close the modal and show success message
        setIsModalOpen(false);
        Swal.fire({
          title: "Good job!",
          text: "Congratulations! Order Confirmed!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        setSelectedColor(initialColor);
        setSelectedSize(initialSize);
      });
  };

  return (
    <div className="flex justify-center items-center">
      {individualProductData ? (
        <div className="max-w-md p-8 bg-white shadow-md relative">
          <img
            src={individualProductData.imageUrls[selectedColor]}
            alt={individualProductData.name}
            className="w-full h-60 object-cover mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">
            {individualProductData.name}
          </h2>
          <p className="text-gray-600 mb-4">Selected Color: {selectedColor}</p>
          <div className="flex mb-4">
            <p className="text-gray-600 mr-2">Available Colors:</p>
            {individualProductData.variations.color.map((colorOption) => (
              <div
                key={colorOption}
                onClick={() => setSelectedColor(colorOption)}
                className={`w-6 h-6 rounded-full mr-2 cursor-pointer ${
                  colorOption === selectedColor
                    ? `border-2 border-green-500`
                    : ""
                }`}
                style={{ backgroundColor: colorOption.toLowerCase() }}
              ></div>
            ))}
          </div>
          <div className="flex mb-4">
            <p className="text-gray-600 mr-2">Available Sizes:</p>
            {individualProductData.variations.size.map((sizeOption) => (
              <div
                key={sizeOption}
                onClick={() => handleSizeChange(sizeOption)}
                className={`px-2 py-1 border rounded-full mr-2 cursor-pointer ${
                  sizeOption === selectedSize ? `border-blue-500` : ""
                }`}
              >
                {sizeOption}
              </div>
            ))}
          </div>
          {/* Add more product details here */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          {/* Modal Overlay */}
          {isModalOpen && (
            <div
              className="overlay open"
              onClick={handleCloseModal}
            ></div>
          )}

          {/* Modal */}
          {isModalOpen && (
            <div className="modal open">
              <h3 className="text-2xl font-semibold mb-4">Cart Modal</h3>
              <hr className="my-3" />
              <div className="mb-1 text-start flex flex-col">
                <label
                  htmlFor="ServiceName"
                  className="block text-black text-lg font-semibold mb-1"
                >
                  User Name
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  className="form-input w-full text-[16px] font-medium"
                  readOnly
                />
              </div>
              <div className="mb-1 text-start flex flex-col">
                <label
                  htmlFor="ServiceName"
                  className="block text-black text-lg font-semibold mb-1"
                >
                  User Email
                </label>
                <input
                  type="text"
                  value={user.email}
                  className="form-input w-full text-[16px] font-medium"
                  readOnly
                />
              </div>
              <div className="mb-1 text-start flex flex-col">
                <label
                  htmlFor="ServiceName"
                  className="block text-black text-lg font-semibold mb-1"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  value={individualProductData.name}
                  className="form-input w-full text-[16px] font-medium"
                  readOnly
                />
              </div>
              <div className="mb-1 text-start flex flex-col">
                <label
                  htmlFor="ServiceName"
                  className="block text-black text-lg font-semibold mb-1"
                >
                  Selected Color
                </label>
                <input
                  type="text"
                  value={selectedColor}
                  className="form-input w-full text-[16px] font-medium"
                  readOnly
                />
              </div>
              <div className="mb-1 text-start flex flex-col">
                <label
                  htmlFor="ServiceName"
                  className="block text-black text-lg font-semibold mb-1"
                >
                  Selected Size
                </label>
                <input
                  type="text"
                  value={selectedSize}
                  className="form-input w-full text-[16px] font-medium"
                  readOnly
                />
              </div>

              <div className="flex justify-center mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full ml-2 text-lg font-semibold"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
