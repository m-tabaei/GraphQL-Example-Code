import { useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphQL/queries";



const User = () => {
  const [id, setId] = useState(2);

  const changeHandler = (e) => {
    setId(e.target.value);
  };

  const { loading, data, error } = useQuery(GET_USER, {
    variables: { id: id },
  });

  console.log({loading, data, error});

  return (
    <div>
      <input value={id} onChange={changeHandler} placeholder="Enter ID" />
      {data && (
        <>
          <h1>{data.user.name}</h1>
          <p>{data.user.email}</p>
          <p>{data.user.phone}</p>
        </>
      )}
    </div>
  );
};

export default User;
