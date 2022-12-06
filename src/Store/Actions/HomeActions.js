import {client} from '../../../App';
import {FETCH_CHARACTERS, FETCH_ITEM_DETAILS} from './Home.graphql';

export const FetchItemsAction = page => {
  return dispatch => {
    const getItems = () => {
      client
        .query({
          query: FETCH_CHARACTERS,
          fetchPolicy: 'network-only',
          variables: {page},
        })
        .then(result => {
          const {data} = result;
          dispatch({
            type: 'GET_ITEMS',
            payload: data?.characters?.results,
          });
        })
        .catch(error => console.log(error));
    };
    getItems();
  };
};

export const IncreasePageAction = page => dispatch => {
  dispatch({
    type: 'INCREASE_PAGE',
    payload: page,
  });
};

export const FetchItemDetailsAction = id => {
  return dispatch => {
    if (id) {
      const getItems = () => {
        client
          .query({
            query: FETCH_ITEM_DETAILS,
            fetchPolicy: 'network-only',
            variables: {id},
          })
          .then(result => {
            const {data} = result;
            dispatch({
              type: 'SET_ACTIVE_CHARACTER',
              payload: data?.character,
            });
          })
          .catch(error => console.log(error, 'errorr'));
      };
      getItems();
    } else {
      dispatch({
        type: 'SET_ACTIVE_CHARACTER',
        payload: null,
      });
    }
  };
};

export const AddToFavoritesAction = item => dispatch => {
  dispatch({
    type: 'ADD_TO_FAVORITES',
    payload: item,
  });
};

export const RemoveFromFavoritesAction = id => dispatch => {
  dispatch({
    type: 'REMOVE_FROM_FAVORITES',
    payload: id,
  });
};
