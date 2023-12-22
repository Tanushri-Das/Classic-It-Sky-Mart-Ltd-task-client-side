import React from "react";

const ProductCard = ({ product, handleSizeChange, handleColorChange }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.imageUrls[product.selectedVariations.color]}
        alt={product.name}
        className="rounded-md shadow-md max-w-full"
      />

      <div>
        <h3>Color:</h3>
        {product.variations.color.map((color) => (
          <label
            key={color}
            className={`inline-block p-2 rounded-full cursor-pointer ${
              product.selectedVariations.color === color
                ? `bg-${color.toLowerCase()}-500 text-white`
                : ""
            }`}
          >
            <input
              type="radio"
              name="color"
              value={color}
              checked={product.selectedVariations.color === color}
              onChange={() => handleColorChange(color)}
              className="sr-only"
            />
            {color}
          </label>
        ))}
      </div>

      <div>
        <h3>Size:</h3>
        {product.variations.size.map((size) => (
          <button
            key={size}
            style={{
              padding: "5px",
              marginRight: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
