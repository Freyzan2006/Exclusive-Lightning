export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number,
): number => {
  let discountAmount = (originalPrice * discountPercentage) / 100;
  let discountedPrice = originalPrice - discountAmount;
  return discountedPrice;
};
