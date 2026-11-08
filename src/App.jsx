import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setContacts([
        { id: 1, name: 'Juan Pérez', phone: '3151234567' },
        { id: 2, name: 'Ana Gómez', phone: '3109876543' }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const addContact = (name, phone) => {
    const newContact = { id: Date.now(), name, phone };
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  if (loading) return <h3>Cargando contactos...</h3>;

  return (
    <div>
      <h2>Gestor de Contactos</h2>
      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}
export default App;