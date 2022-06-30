import { gql } from "@apollo/client";

export const Get_All_Users = gql `
    query{
        getUsers {
            id
            strName
            dtmDOB
            blnIsActive
            strEmail
            strPassword
        }
    }
`
