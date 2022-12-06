const initialState = {
  items: [],
  page: 1,
  character: null,
  favorites: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_ITEMS':
      return {...state, items: state.items.concat(payload)};
    case 'INCREASE_PAGE':
      return {...state, page: payload};
    case 'SET_ACTIVE_CHARACTER':
      return {...state, character: payload};
    case 'ADD_TO_FAVORITES':
      if (state.favorites.includes(payload)) {
        return {...state};
      } else {
        return {
          ...state,
          favorites: [...state.favorites, payload],
        };
      }
    case 'REMOVE_FROM_FAVORITES':
      const filteredFavorites = state.favorites.filter(item => {
        return item.id !== payload;
      });
      return {
        ...state,
        favorites: filteredFavorites,
      };

    default:
      return state;
  }
};
