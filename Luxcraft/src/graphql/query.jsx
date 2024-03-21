import { gql } from '@apollo/client';

export const GET_WORKS = gql`
  query {
    getAllWorks {
        _id
        nameWork
        description
        clientName
        nameArch
        termWork
        typeProj
        strategyWork
        dateWork
        imageWorks {
          img
        }
    }
  }
`;
  