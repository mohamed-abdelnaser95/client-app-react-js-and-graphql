import React, { useEffect, useState } from 'react';
import { Get_All_Users } from '../graphql/Queries';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_USER } from '../graphql/Mutations';
const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const { error, loading, data } = useQuery(Get_All_Users);
  const [deleteUser, { error: error2 }] = useMutation(DELETE_USER);
  useEffect(() => {
    console.log(data);
    if (data) {
      setUsers(data?.getUsers);
    }
  }, [users, data]);
  if (error) {
    console.log(`get users error: ${error}`);
  }
  return (
    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
      {loading ? (
        <div>Loooooooooooooding</div>
      ) : (
        users?.map((data) => (
          <div
            className="card"
            key={data.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              border: '1px solid #444',
              padding: '10px',
            }}
          >
            <p> User Name : {data?.strName} </p>
            <p> User Password : {data?.strPassword} </p>
            <p> User Email : {data?.strEmail} </p>
            <p> User Date Of Birth : {data?.dtmDOB} </p>
            <p>
              {' '}
              User Active : {data?.blnIsActive === true ? 'true' : 'false'}{' '}
            </p>
            <button
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={() => deleteUser({ variables: { id: 1 * data?.id } })}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default GetUsers;
