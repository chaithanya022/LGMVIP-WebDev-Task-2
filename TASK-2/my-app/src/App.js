import React, { useState } from "react";
import "./App.css";
import logo from "./LOGO.png";



const Myapp=()=>{

  const [users, setUsers] = useState([]);
  const loadusers = async() => {
    const response = await fetch ("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
  };

  return (
    <div className="App">
      <div className="Nav">
        <img src={logo} alt="zippy"></img>
        <button onClick={loadusers}>Get Data</button>
      </div>
      <div className="user">
        {
          users.map(({email, first_name, last_name, avatar})=>{
            return(
              <div className="mycard">
                <div className="photo">
                  <img src={avatar} about alt=""></img>  
                </div>
                <div className="details">
                  <h2>{first_name} {last_name}</h2>
                  <h3>{email}</h3>
                </div>
              </div>  

            )
          })
        }
      </div>
    </div>  
  );  
}
export default Myapp;