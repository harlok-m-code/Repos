import React from 'react'

function Data({ rowItem }) {
    return (
        <div>
            {rowItem&&
                <div>
                    <div>id:<b> {rowItem.id}</b></div>
                    <div>firstName: <b>{rowItem.firstName}</b></div>
                    <div>lastName: <b>{rowItem.lastName}</b></div>
                    <div>email:<b> {rowItem.email}</b></div>
                    <div>phone:<b> {rowItem.phone}</b></div>
                    <div>streetAddress:<b> {rowItem.address.streetAddress}</b></div>
                    <div>city:<b> {rowItem.address.city}</b></div>
                    <div>state:<b> {rowItem.address.state}</b></div>
                    <div>zip:<b> {rowItem.address.zip}</b></div>
                    <div>description:<b>{rowItem.description}</b></div> 
                </div>
            }
        </div>
    )
}

export default Data

// id: 101,
// 		firstName: 'Sue',
// 		lastName: 'Corson',
// 		email: 'DWhalley@in.gov',
// 		phone: '(612)211-6296',
// 		address: {
// 			streetAddress: '9792 Mattis Ct',
// 			city: 'Waukesha',
// 			state: 'WI',
// 			zip: '22178'
// 		},
// 		description: 'et lacus magna dolor...',

{/* <div>firstName:<b>{rowItem.firstName}</b></div>
                <div>lastName:<b>{rowItem.lastName}</b></div>
                <div>email:<b>{rowItem.email}</b></div>
                <div>phone:<b>{rowItem.phone}</b></div>
                <div>address:<b>{rowItem.address}</b></div>
                <div>description:<b>{rowItem.description}</b></div> */}