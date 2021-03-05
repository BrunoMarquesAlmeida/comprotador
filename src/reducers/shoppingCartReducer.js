import _ from "lodash";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_ITEM_AMOUNT,
  CART_DELETE,
} from "../actions";

const INITIAL_STATE = {
  "6040bb9b592fbe2e68f33a3f": {
    _id: "6040bb9b592fbe2e68f33a3f",
    title: "Fonte de Alimentação Nox Hummer X700W 80 PLUS Bronze Semi Modular",
    image: "assets/img/produtos/product-p016157-55456_2.jpg",
    preco: "68.90",
    quantidade: "2",
  },
  "6040bb9b592fbe2e68f33a3c": {
    _id: "6040bb9b592fbe2e68f33a3c",
    title: "Placa Gráfica Gigabyte GeForce RTX 3090 Aorus Xtreme 24GB",
    image: "assets/img/produtos/1_342_25.jpg",
    preco: "1949.90",
    quantidade: 1,
  },
  "603fdb35116cfb4bb00638ee": {
    _id: "603fdb35116cfb4bb00638ee",
    title: "Processador AMD Ryzen 5 3600XT Hexa-Core 3.8GHz c/ Turbo 4.5GHz",
    image: "assets/img/produtos/1_p025452.jpg",
    preco: "259.90",
    quantidade: "3",
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case REMOVE_FROM_CART:
      return _.omit(state, action.payload);
    case CHANGE_ITEM_AMOUNT:
      const productWithNewAmount = {
        ...state[action.payload.id],
        quantidade: action.payload.amount,
      };
      return { ...state, [action.payload.id]: productWithNewAmount };
    case CART_DELETE:
      return {};
    default:
      return state;
  }
};
