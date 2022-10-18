import { gql } from '@apollo/client';

export const GET_USER_INFORMATION = gql`
  query GetUserInformation($userId:Int!){
    getUserInformation(userId:$userId)  {
      name
      lastName
      level
      image
    }
  }
`;

export const GET_USER_PURCHASE = gql`
  query GetUserPurchases($userId:Int!) {
    getUserPurchases(userId:$userId) {  
      purchase_id
      title
      price {
        total
        currency
      }
      quantity
      date
      image
      seller {
        id
        nickname
      }
      transaction_id
      send_id
      }
  }
`;