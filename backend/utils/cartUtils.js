// utils/cartUtils.js
export const addToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = existingCart.find((item) => item._id === product._id);

  let updatedCart;
  if (existingItem) {
    updatedCart = existingCart.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    updatedCart = [...existingCart, { ...product, quantity: 1 }];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  alert(`${product.name} added to cart!`);
};
