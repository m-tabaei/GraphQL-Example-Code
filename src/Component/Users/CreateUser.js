import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation {
    createUser(
      input: {
        name: "mohammad"
        username: "mtabaei"
        email: "mtabaie@gmail.com"
        phone: "09123327370"
      }
    ) {
      id
      name
      email
      phone
    }
  }
`;

const CreateUser = () => {
  const [createUser, { loading, data, error, called }] = useMutation(CREATE_USER);
  console.log({ loading, data, error, called });

  return <div><button onClick={()=>createUser()}>Click</button></div>;
};

export default CreateUser;
