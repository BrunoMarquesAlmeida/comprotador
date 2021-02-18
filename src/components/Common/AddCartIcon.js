export const AddCartIcon = (props) => {
  const { addToCart, product } = props;
  return (
    <span className="btn btn-primary" onClick={() => addToCart(product)}>
      Adicionar ao
      <i className="fa fa-shopping-cart fa-icon" alt="carrinho"></i>
    </span>
  );
};
