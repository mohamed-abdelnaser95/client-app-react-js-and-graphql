import { useEffect, useState } from "react";

const Home = () => {
    const GET_ALL_USERS_QUERY = `
        {
            getUsers {
                id,
                strName,
                dtmDOB,
                blnIsActive,
                strEmail,
                strPassword
            }
        }
    `

    const [state, setState] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/graphql/',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json",
            },
            body: JSON.stringify({ query: GET_ALL_USERS_QUERY})
        })
        // .then(response=> response.json()) // this is right
            // the problem with the return keyword i must write it if i make it multiple lines
        .then(response=>{
            // console.log(response)
            return response.json() // this is right
        })
        .then(data => {
            console.log(data.data.getUsers)
            let AllUsers = data.data.getUsers
            setState(AllUsers) 
        })
    }, [GET_ALL_USERS_QUERY]) 

    return ( 
        <div style={{display: 'flex', gap: '5px', flexWrap: 'wrap'}}>
            {state?.map((data)=>(
                <div className="card" key={data.id} style={{display: 'flex', flexDirection:'column', gap: '10px', border: '1px solid #444', padding: '10px'}}>
                    <p> User Name : {data.strName} </p>
                    <p> User Password : {data.strPassword} </p>
                    <p> User Email : {data.strEmail} </p>
                    <p> User Date Of Birth : {data.dtmDOB} </p>
                    <p> User Active : {data.blnIsActive} </p>
                </div>
            ))}
        </div>
    );
}

export default Home;