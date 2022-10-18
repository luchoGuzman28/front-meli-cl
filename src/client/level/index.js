import { gql } from '@apollo/client';

export const GET_LEVEL = gql`
  query GetLevel {
    getLevel {
      id_nivel
      descripción
    }
  }
`;
