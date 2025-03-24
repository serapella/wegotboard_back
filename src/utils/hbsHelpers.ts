export default {
  discount: (product: any) => {
    return (product.price * (1 - product.discount / 100)).toFixed(2);
  },
};
