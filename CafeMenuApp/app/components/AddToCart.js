const addToCart = (item) => {
  const existingItem = cartItems.find((ci) => ci.id === item.id);

  if (existingItem) {
    setCartItems((prev) =>
      prev.map((ci) =>
        ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
      )
    );
  } else {
    setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
  }
};

// Kolla om item redan finns i cart
// Om den redan finns, öka quantity
// Annars lägg till med quantity 1
