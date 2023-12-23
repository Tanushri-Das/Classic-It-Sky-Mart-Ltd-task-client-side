// import React, { useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
// import "./Modal.css";
// import Swal from "sweetalert2";
// import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const individualProductData = useLoaderData();
//   console.log("individualProductData", individualProductData);

//   const initialColor = individualProductData.selectedVariations.color || "Blue";
//   const initialSize = individualProductData.selectedVariations.size || "Small";

//   const [selectedColor, setSelectedColor] = useState(initialColor);
//   const [selectedSize, setSelectedSize] = useState(initialSize);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//   };

//   const handleAddToCart = () => {
//     // Perform any logic you need before adding to the cart
//     // Open the modal
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     // Reset selected color and size to initial values when closing the modal
//     setSelectedColor(initialColor);
//     setSelectedSize(initialSize);
//     setIsModalOpen(false);
//   };

//   const handleSubmit = () => {
//     const order = {
//       UserName: user.displayName,
//       email: user.email,
//       productName: individualProductData.name,
//       Color: selectedColor,
//       Size: selectedSize,
//     };
//     console.log("Order:", order);
//     fetch("https://classic-it-task-server-side.vercel.app/orders", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(order),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // Close the modal and show success message
//         setIsModalOpen(false);
//         Swal.fire({
//           title: "Good job!",
//           text: "Congratulations! Order Confirmed!",
//           icon: "success",
//           timer: 1500,
//           showConfirmButton: false,
//         });
//         setSelectedColor(initialColor);
//         setSelectedSize(initialSize);
//       });
//   };

//   return (
//     <div className="my-12">
//       <h1 className="text-3xl mb-5 text-center font-bold">Details Page</h1>
//       <div className="flex justify-center items-center">
//         {individualProductData ? (
//           <div className="max-w-lg px-4 py-8 rounded-xl bg-white shadow-md relative">
//             <div className="object-cover">
//             <img
//                 src={individualProductData.imageUrls[selectedColor]}
//                 alt={individualProductData.name}
//                 className="h-3/4 w-full"
//               />
//             </div>

//             <h2 className="text-2xl font-semibold mt-4 mb-3 text-center">
//               {individualProductData.name}
//             </h2>

//             {/* Available Colors */}
//             <div className="flex mb-2">
//               <p className="text-lg font-semibold mr-2">Available Colors : </p>
//               {individualProductData.variations.color.map((colorOption) => (
//                 <div
//                   key={colorOption}
//                   onClick={() => setSelectedColor(colorOption)}
//                   className={`w-6 h-6 rounded-full mr-2 cursor-pointer ${
//                     colorOption === selectedColor
//                       ? `border-2 border-green-500`
//                       : ""
//                   }`}
//                   style={{ backgroundColor: colorOption.toLowerCase() }}
//                 ></div>
//               ))}
//             </div>

//             {/* Available Sizes */}
//             <div className="flex mb-8">
//               <p className="text-lg font-semibold mr-2">Available Sizes : </p>
//               {individualProductData.variations.size.map((sizeOption) => (
//                 <div
//                   key={sizeOption}
//                   onClick={() => handleSizeChange(sizeOption)}
//                   className={`px-2 py-1 border rounded-full mr-2 cursor-pointer text-[16px] font-medium text-center ${
//                     sizeOption === selectedSize ? `border-blue-500` : ""
//                   }`}
//                 >
//                   {sizeOption}
//                 </div>
//               ))}
//             </div>

//             {/* Add more product details here */}
//             <div className="flex justify-center">
//               <button
//                 className="bg-[#032174] text-white px-10 py-6 rounded-lg text-lg font-medium"
//                 onClick={handleAddToCart}
//               >
//                 Add to Cart
//               </button>
//             </div>

//             {/* Modal Overlay */}
//             {isModalOpen && (
//               <div className="overlay open" onClick={handleCloseModal}></div>
//             )}

//             {/* Modal */}
//             {isModalOpen && (
//               <div className="modal open">
//                 <h3 className="text-2xl font-semibold mb-4">Cart Modal</h3>
//                 <hr className="my-3" />
//                 <div className="mb-1 text-start flex flex-col">
//                   <label
//                     htmlFor="ServiceName"
//                     className="block text-black text-lg font-semibold mb-1"
//                   >
//                     UserName
//                   </label>
//                   <input
//                     type="text"
//                     value={user.displayName}
//                     className="form-input w-full text-[16px] font-medium"
//                     readOnly
//                   />
//                 </div>
//                 <div className="mb-1 text-start flex flex-col">
//                   <label
//                     htmlFor="ServiceName"
//                     className="block text-black text-lg font-semibold mb-1"
//                   >
//                     UserEmail
//                   </label>
//                   <input
//                     type="text"
//                     value={user.email}
//                     className="form-input w-full text-[16px] font-medium"
//                     readOnly
//                   />
//                 </div>
//                 <div className="mb-1 text-start flex flex-col">
//                   <label
//                     htmlFor="ServiceName"
//                     className="block text-black text-lg font-semibold mb-1"
//                   >
//                     ProductName
//                   </label>
//                   <input
//                     type="text"
//                     value={individualProductData.name}
//                     className="form-input w-full text-[16px] font-medium"
//                     readOnly
//                   />
//                 </div>
//                 <div className="mb-1 text-start flex flex-col">
//                   <label
//                     htmlFor="ServiceName"
//                     className="block text-black text-lg font-semibold mb-1"
//                   >
//                     Color
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedColor}
//                     className="form-input w-full text-[16px] font-medium"
//                     readOnly
//                   />
//                 </div>
//                 <div className="mb-1 text-start flex flex-col">
//                   <label
//                     htmlFor="ServiceName"
//                     className="block text-black text-lg font-semibold mb-1"
//                   >
//                     Size
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedSize}
//                     className="form-input w-full text-[16px] font-medium"
//                     readOnly
//                   />
//                 </div>

//                 <div className="flex justify-center mt-4">
//                   <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold"
//                     onClick={handleSubmit}
//                   >
//                     Submit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-4 py-2 rounded-full ml-2 text-lg font-semibold"
//                     onClick={handleCloseModal}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <CustomSpinner />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;












import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Modal.css";
import Swal from "sweetalert2";
import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const individualProductData = useLoaderData();
  console.log("individualProductData", individualProductData);

  const initialColor = individualProductData.selectedVariations.color || "Blue";
  const initialSize = individualProductData.selectedVariations.size || "Small";

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedColor(initialColor);
    setSelectedSize(initialSize);
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    const order = {
      UserName: user.displayName,
      email: user.email,
      productName: individualProductData.name,
      Color: selectedColor,
      Size: selectedSize,
    };
    console.log("Order:", order);
    fetch("https://classic-it-task-server-side.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
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
    <div className="my-12">
      <h1 className="text-3xl mb-5 text-center font-bold">Details Page</h1>
      <div className="flex justify-center items-center">
        {individualProductData ? (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-4 rounded-xl bg-white shadow-md relative">
            <div className="object-cover">
              <img
                src={individualProductData.imageUrls[selectedColor]}
                alt={individualProductData.name}
                className="w-full h-3/4 sm:h-96 object-contain"
              />
            </div>

            <h2 className="text-2xl font-semibold mt-4 mb-3 text-center">
              {individualProductData.name}
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center mb-2">
              <p className="text-lg font-semibold mr-2">Available Colors : </p>
              <div className="flex flex-wrap sm:ml-2">
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
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <p className="text-lg font-semibold mr-2">Available Sizes : </p>
              <div className="flex flex-wrap">
                {individualProductData.variations.size.map((sizeOption) => (
                  <div
                    key={sizeOption}
                    onClick={() => handleSizeChange(sizeOption)}
                    className={`px-2 py-1 border rounded-full mr-2 mb-2 cursor-pointer text-[16px] font-medium text-center ${
                      sizeOption === selectedSize ? `border-blue-500` : ""
                    }`}
                  >
                    {sizeOption}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-[#032174] text-white px-10 py-6 rounded-lg text-lg font-medium"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>

            {isModalOpen && (
              <div className="overlay open" onClick={handleCloseModal}></div>
            )}

            {isModalOpen && (
              <div className="modal open">
                <h3 className="text-2xl font-semibold mb-4">Cart Modal</h3>
                <hr className="my-3" />
                <div className="mb-1 text-start flex flex-col">
                  <label
                    htmlFor="ServiceName"
                    className="block text-black text-lg font-semibold mb-1"
                  >
                    UserName
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
                    UserEmail
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
                    ProductName
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
                    Color
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
                    Size
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
          <CustomSpinner />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
