import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow w-full"
    >
      <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
      <p className="text-sm text-gray-600">Category: {product.category}</p>
      <p className="text-lg font-medium mt-2">₹{product.price}</p>
      <p className={product.inStock ? 'text-green-600 mt-1' : 'text-red-600 mt-1'}>
        {product.inStock ? t('product.inStock') : t('product.outOfStock')}
      </p>
    </motion.div>
  );
};

export default ProductCard;
