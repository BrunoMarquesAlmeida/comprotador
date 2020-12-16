import Category from "./components/Category";
import Detail from "./components/Detail";
import MyAccount from "./components/MyAccount";
import ShoppingCart from "./components/ShoppingCart";
import Info from "./components/Info";

export default [
  {
    path: "/categoria/:categoria/:subCategoria/:subCategoria2",
    name: "Category",
    Component: Category,
  },
  {
    path: "/categoria/:categoria/:subCategoria",
    name: "Category",
    Component: Category,
  },
  {
    path: "/categoria/:categoria",
    name: "Category",
    Component: Category,
  },
  {
    path: "/detalhes/:id",
    name: "Detail",
    Component: Detail,
  },
  {
    path: "/conta",
    name: "Conta",
    Component: MyAccount,
  },
  {
    path: "/conta/encomendas",
    name: "Encomendas",
    Component: MyAccount,
  },
  {
    path: "/conta/wishlist",
    name: "Wishlist",
    Component: MyAccount,
  },
  {
    path: "/conta/encomendas/:id",
    name: "Detalhes da encomenda",
    Component: MyAccount,
  },
  {
    path: "/carrinho",
    name: "Carrinho de compras",
    Component: ShoppingCart,
  },
  {
    path: "/carrinho/checkout1",
    name: "Checkout - Endereço",
    Component: ShoppingCart,
  },
  {
    path: "/carrinho/checkout2",
    name: "Checkout - Método de envio",
    Component: ShoppingCart,
  },
  {
    path: "/carrinho/checkout3",
    name: "Checkout - Método de pagamento",
    Component: ShoppingCart,
  },
  {
    path: "/carrinho/checkout4",
    name: "Checkout - Revisão e confirmação",
    Component: ShoppingCart,
  },
  {
    path: "/info/sobre",
    name: "Informações - Sobre",
    Component: Info,
  },
  {
    path: "/info/FAQ",
    name: "Informações - FAQ",
    Component: Info,
  },
  {
    path: "/info/contactos",
    name: "Informações - Contactos",
    Component: Info,
  },
];
