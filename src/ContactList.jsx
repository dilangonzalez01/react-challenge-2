function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button onClick={() => onDelete(contact.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}
export default ContactList;