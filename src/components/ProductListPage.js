import React from 'react';

const ProductListPage = ({ products }) => {
  return (
    <div>
      <h2>Uploaded Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <h3>{product.title}</h3>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Hash Tag:</strong> {product.hashTag}</p>
            <p><strong>Detailed Description:</strong> {product.detailedDescription}</p>
            <p><strong>Short Description:</strong> {product.shortDescription}</p>
            
            {/* Display the cover image if available */}
            {product.coverImage && (
              <div>
                <strong>Cover Image:</strong><br />
                {/* Displaying as a block for demonstration; you might need to adjust the display logic based on how you're handling files */}
                <img src={URL.createObjectURL(product.coverImage)} alt="Cover" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              </div>
            )}
            
            {/* Display the description file if available */}
            {product.descriptionFile && (
              <div>
                <strong>Description File:</strong><br />
                {/* text file */}
                <a href={URL.createObjectURL(product.descriptionFile)} target="_blank" rel="noopener noreferrer">Open Description File</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
