import { gql } from '@apollo/client';

export const GET_PAYMENT = gql`
  query GetPayment($paymentId: Int!){
    getPayment(paymentId: $paymentId) {
      id_transaccion
      estado
    }
  }
`;