const formatPrice = function (price) {
  const formattedPrice = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1\u00a0");
  return formattedPrice;
};

export default formatPrice;
