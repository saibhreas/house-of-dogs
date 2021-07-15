import { gql } from '@apollo/client';

export const QUERY_PROVIDERS = gql`
  query getProviders($service: ID) {
    providers(service: $service) {
      _id
      name
      description
      price
      quantity
      image
      service {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PROVIDERS = gql`
  {
    providers {
      _id
      name
      description
      price
      quantity
      service {
        name
      }
    }
  }
`;

export const QUERY_SERVICES = gql`
  {
    services {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
