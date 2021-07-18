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

export const MAKE_APPOINTMENT = gql`
  mutation makeAppointment($appointment: AppointmentObj!) {
    makeAppointment(appointment: $appointment)
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
    $dog: DogObj!
  ) {
    addDog(
      dog: $dog
    ) {
      name
    }
  }
`;
