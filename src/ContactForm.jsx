import { useState } from 'react';

function ContactForm({ onAdd }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    onAdd(name, phone);
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Nombre del contacto" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        placeholder="Teléfono" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)} 
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
export default ContactForm;