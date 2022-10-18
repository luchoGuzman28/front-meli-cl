import { gql } from '@apollo/client';

export const GET_SHIPMENT = gql`
  query GetShipment {
    getShipment {
      id_envio
      estado
    }
  }
`;