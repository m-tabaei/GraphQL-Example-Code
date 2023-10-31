import { useState } from "react";

const User = () => {
    const [id, setId] = useState("")
    
    const changeHandler= (e)=>{
        setId(e.target.value)
    }

    return (
     <div><input value={id} onChange={changeHandler} placeholder="Enter ID"/></div>   
      );
}
 
export default User;