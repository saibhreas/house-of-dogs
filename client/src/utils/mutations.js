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

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!, $phoneNumber: String, $address: String) {
    createUser(name: $name, email: $email, password: $password, phoneNumber: $phoneNumber, address: $address) {
    user {
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
      }
    }
    token
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
