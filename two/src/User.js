import React from "react";

class User extends React.Component {

  componentWillUnmount(){
    alert("Пользователь удалён");
  }
  
  render() {
    return(
      <div>
         <ul>
          <li>Name: Ann</li>
          <li>Email: ann@example.com</li>
          <li>Contact: 123-456-7890</li>
         </ul>
      </div>
    )
  }
}

export default User;
