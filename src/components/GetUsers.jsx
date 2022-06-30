import React, { useEffect, useState } from 'react'
import { Get_All_Users } from '../graphql/Queries'
import { useQuery } from '@apollo/client'

const  GetUsers = ()=> {
    const [users, setUsers] = useState()
    const { error, loading, data } = useQuery(Get_All_Users)
    
    useEffect(()=> {
        console.log(data)
        setUsers(data?.getUsers)
    }, [users, data?.getUsers])
    if(error){
        console.log(`get users error: ${error}`)
    }
    return (
        <div style={{display: 'flex', gap: '5px', flexWrap: 'wrap'}}>
            {loading? <div>Loooooooooooooding</div>
                :users?.map((data)=>(
                <div className="card" key={data.id} style={{display: 'flex', flexDirection:'column', gap: '10px', border: '1px solid #444', padding: '10px'}}>
                    <p> User Name : {data.strName} </p>
                    <p> User Password : {data.strPassword} </p>
                    <p> User Email : {data.strEmail} </p>
                    <p> User Date Of Birth : {data.dtmDOB} </p>
                    <p> User Active : {data.blnIsActive === true? "true" : "false"} </p>
                </div>
            ))}
        </div>
    )
}

export default GetUsers