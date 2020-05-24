import React from "react"
import '../index.css'

function Card(props) 

{
  return (
    <div className="cardDisplay is-mobile">
    <table className="table">
        <thead>
        <tr>
        <th>Photo</th>
        <th>
       
        Name
        </th>
        <th>Phone</th>
        <th>Email</th>
        <th>Age</th>
        </tr>
        </thead>
        <tbody className="tableBod">
    {props.users.map(user => {
      return (
          <tr>
            <th>
            <img src={user.picture.medium} alt="N/A"/>
            </th>
            <td>
              {user.name.first} {user.name.last}
            </td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.dob.age}</td>
          </tr>
      );
    })}
    </tbody>

</table>
  </div>
  )
}

export default Card