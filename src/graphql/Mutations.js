import { gql } from "@apollo/client";

export const Add_User = gql `
    mutation addUser(
            $strName: String!,
            $strEmail: String!,
            $strPassword: String!,
            $dtmDOB: String!,
            $blnIsActive: Boolean!
        ){
        addUser(
                strName : "harry",
                dtmDOB : "10-9-2000",
                strEmail : "harry@gmail.com",
                strPassword :"dsndnas" ,
                blnIsActive : true
        ){
            id
        }
    }
`
// export const Add_User = gql `
//     mutation {
//     addUser( 
//         strName: "harry"
//         strEmail: "harry@gmail.com"
//         strPassword: "12345678"
//         dtmDOB: "1995-07-02"
//         blnIsActive: false
//     ){
//         id
//         strEmail
//         strName
//     }
// }
// `

