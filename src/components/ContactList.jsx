import React, { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";
const apiUrl = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"


const ContactList = ({setSelectedContactId}) => {
    const [contacts, setContacts] = useState ([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchContacts = async() => {
        try {
            const data = await fetch(apiUrl);
            const result = await data.json();
            setContacts(result);
        }   catch (error) {
            console.log(error)
        }
        }
        fetchContacts();
    }, []) 
    return (
    <>
    <table>
        <thead>
            <tr>
                <th colSpan="3">Contact List</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            {error ? (
                <tr>{error}</tr> ) :
            (contacts.map((contact) => {
                return (
                <ContactRow
                key = {contact.id}
                contact = {contact}
                setSelectedContactId={setSelectedContactId}/>
            )
        })
        )}
        </tbody>
    </table>
</>
)}

export default ContactList