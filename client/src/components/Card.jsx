import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p>Category: {product.category}</p>
      <p>₹{product.price}</p>
      <p className={product.inStock ? 'instock' : 'outstock'}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
