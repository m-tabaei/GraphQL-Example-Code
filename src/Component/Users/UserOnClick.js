import { useState } from "react";

import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../../graphQL/queries";

const UserOnClick = () => {
  const [id, setId] = useState(2);

  const changeHandler = (e) => {
    setId(e.target.value);
  };

  const [getUser, { loading, data, error, called }] = useLazyQuery(GET_USER, {
    variables: { id: id },
  });

  console.log({ loading, data, error, called });

  return (
    <div>
      <input value={id} onChange={changeHandler} placeholder="Enter ID" />
      <button onClick={() => getUser()}>Get user</button>
      {loading && <h1>Loading... </h1>}
      {error && <h1>Error ... </h1>}
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

export default UserOnClick;
