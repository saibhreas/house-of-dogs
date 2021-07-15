import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
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
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_DOG = gql`
  mutation addDog(
    $name: String!
    $breed: String!
    $age: Number!
    $weight: Number!
    $gender: String!
  ) {
    addDog(
      name: $name
      breed: $breed
      breed: $breed
      age: $age
      weight: $weight
      gender: $gender
    ) {
      dog {
        _id
      }
    }
  }
`;
