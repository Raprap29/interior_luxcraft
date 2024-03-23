import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($input: LoginInput!) {
    loginUser(input: $input) {
      username
      email
      password
      token
    }
  }
`;
