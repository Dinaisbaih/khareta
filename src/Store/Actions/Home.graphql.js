import gql from 'graphql-tag';

export const FETCH_CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          name
        }
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

export const FETCH_ITEM_DETAILS = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      status
      image
      origin {
        type
      }
      type
      species
      episode {
        episode
        air_date
      }
    }
  }
`;
