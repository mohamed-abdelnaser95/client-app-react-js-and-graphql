import { gql } from '@apollo/client';

export const Add_User = gql`
  mutation addUser(
    $strName: String!
    $strEmail: String!
    $strPassword: String!
    $dtmDOB: String!
    $blnIsActive: Boolean!
  ) {
    addUser(
      strName: $strName
      strEmail: $strEmail
      strPassword: $strPassword
      dtmDOB: $dtmDOB
      blnIsActive: $blnIsActive
    ) {
      strEmail
      strName
    }
  }
`;
export const DELETE_USER = gql`
  mutation deleteUser($id: Int!) {
    deleteUser(id: $id)
  }
`;

// mutation addUser(
// $strName: String!,
// $strEmail: String!,
// $strPassword: String!,
// $dtmDOB: String!,
// $blnIsActive: Boolean!
// ){
// addUser(
// 			strName : "harry",
// 			dtmDOB : "10-9-2000",
// 			strEmail : "harry@gmail.com",
// 			strPassword :"dsndnas" ,
// 			blnIsActive : true
// ){
// 	id
// }
// }
