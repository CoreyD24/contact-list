import { useEffect, useState } from "react"

const SelectedContact = () => ({
    selectedContactId,
    setSelectedContactId,
}) => {
    const [contact, setContact] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSelectedContact = async() => {
        try {
            const response = await fetch ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}")
            const result = await response.json()
            setContact(result)
        } 

        catch (error) {
            setError(error)
        }
    }
    fetchSelectedContact()
}, []);

return (
    <div>
      {contact && (
        <div>
          <p>
            <b>Name:</b> {contact.name}
          </p>
          <p>
            <b>Email:</b> {contact.email}
          </p>
          <p>
            <b>Phone:</b> {contact.phone}
          </p>
        </div>
      )}
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Back
      </button>
    </div>
  );
}
     


export default SelectedContact