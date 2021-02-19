export const AddCartIcon = (props) => {
  const { addToCart, product } = props;
  return (
    <span
      className="btn btn-primary"
      onClick={() => {
        addToCart(product);
        window.scrollTo(0, 0);
      }}
    >
      Adicionar ao
      <i className="fa fa-shopping-cart fa-icon" alt="carrinho"></i>
    </span>
  );
};
