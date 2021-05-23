import React from 'react'

function Table({data, sortData , detRow}) {
  
    return (
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => {sortData('id')}}>id</th>
              <th onClick={() => {sortData('firstName')}}>FirstName</th>
              <th onClick={() => {sortData('lastName')}}>LastName</th>
              <th onClick={() => {sortData('email')}}>Email</th>
              <th onClick={() => {sortData('phone')}}>Phone</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map(item=>(
                <tr key={item.id} onClick={()=> detRow(item)}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    )
}

export default Table
