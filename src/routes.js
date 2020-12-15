import Category from "./components/Category";
import Detail from "./components/Detail";
import MyAccount from "./components/MyAccount";

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
];
