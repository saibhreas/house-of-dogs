import { gql } from '@apollo/client';

export const QUERY_PROVIDERS = gql`
  query Query($providersService: Int) {
    providers(service: $providersService) {
      _id
      name
      email
      phoneNumber
      address
      about
      service {
        _id
        name
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
      email
      phoneNumber
      address
      about
      service {
        _id
        name
      }
      appointments {
        _id
        userId
        dogId
        providerId
        from
        to
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

export const QUERY_ME = gql`
  {
    me {
      _id
      name
      email
      phoneNumber
      address
      petsCount
      pets {
        _id
        name
        breed
        age
        weight
        veterinarian {
          name
        }
      }
      appointments {
        _id
        dog
        provider {
          _id
          name
        }
        from
        to
      }
    }
  }
`;
