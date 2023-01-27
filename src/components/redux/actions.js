import {
  ADD_FAVORITES,
  DELETEFAVS,
  FILTER,
  ORDER,
  ALLFAVS,
} from "./actions-types";

export const addFavorites = (favorito) => {
  return { type: ADD_FAVORITES, payload: favorito };
};

export const deleteFavs = (id) => {
  return { type: DELETEFAVS, payload: id };
};

export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};

export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
};

export const allFavs = (todos) => {
  return { type: ALLFAVS, payload: todos };
};
