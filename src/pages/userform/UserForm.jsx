// import axios from "axios";
import { useState, useCallback } from "react";
import { Add_User } from "../../graphql/Mutations";
import { useMutation } from '@apollo/client'

const AddUser = () => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPass] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userDob, setUserDate] = useState('')
    const [userActive, setUserActive] = useState(false)

    const [ createUser, { error } ] = useMutation(Add_User)

    // try useCallback
    const handleSubmit = (e)=> {
        e.preventDefault()
        if(error){
            console.log(error)
        } 
        createUser({
                variables: {
                    strName : "harry",
                    dtmDOB : "10-9-2000",
                    strEmail : "harry@gmail.com",
                    strPassword :"dsndnas" ,
                    blnIsActive : true
                }
        })
        

        
        

        // axios.post('http://localhost:4000/api/insert',{
        //     userName : userName,
        //     userPassword :userPassword ,
        //     userEmail : userEmail,
        //     userActive : userActive,
        //     userDob : userDob,
        // })
        // .then((response)=>{
        //     console.log(response.data)
        //     alert("data saved successfully")
        // })
    }

    return (  
        <form onSubmit={handleSubmit} 
            style={{display: 'flex', flexDirection: 'column', width: '300px',
                    gap: '10px', marginRight: '10px'}}>
            <label>User Name</label>
            <input type='text' required name="userName"
                placeholder="user name" onChange={(e) => setUserName(e.target.value)} />

            <label>User Password</label>
            <input type='password' required name="userPassword"
                placeholder="user passwod" onChange={(e)=>setUserPass(e.target.value)} />

            <label>User Email</label>
            <input type='email' required name="userEmail"
                placeholder="user email" onChange={(e)=> setUserEmail(e.target.value)} />

            <label>User Date Of Birth</label>
            <input type='date' required name="userBob"
                onChange={(e)=> setUserDate(e.target.value)} />

            <label>User Active</label>
            <input type='text' name="userActive" placeholder="userActive true or false" 
                onChange={(e)=> {
                    if (e.target.value === "true") {
                        return setUserActive(true)
                    } ;
                    if (e.target.value  === "false") {  
                        return setUserActive(false)
                    }
                }}/>
                
            <input type='submit' value='Add User'/>
            <button onClick={handleSubmit}>Add User</button>
        </form>
    );
}

export default AddUser;