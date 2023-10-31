import React from "react";
import { gql, useQuery } from "@apollo/client";
const GET_USERS = gql`
  query {
    users {
      data {
        name
        email
        phone
      
      }
    }
  }
`;

const Users = () => {
  const {loading, data, error} = useQuery(GET_USERS);
  console.log({loading,data,error});
  if(loading) return <h3>Loading...</h3>
  if(error) return <h3>Some thing wrong.</h3>
  return (
  <div>
    {data.users.data.map(user => <div key={user.id}>
  <h1>{user.name}</h1>
<p>{user.email}</p>
<p>{user.phone}</p>
    </div>)}

  </div>
  )
};

export default Users;
