import React, { useState, useEffect } from 'react';
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';
import { Contact } from './types';
import { saveContactToFile, loadContactsFromFiles } from './utils/fileSystem';
import { Search } from 'lucide-react';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const loadedContacts = loadContactsFromFiles();
    setContacts(loadedContacts);
  }, []);

  const addContact = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
    saveContactToFile(newContact);
  };

  const filteredContacts = contacts.filter(contact =>
    Object.values(contact).some(value =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">個人人脈管理系統</h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">新增聯絡人</h2>
          <ContactForm onAddContact={addContact} />
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">搜尋聯絡人</h2>
          <div className="flex items-center">
            <Search size={20} className="mr-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜尋聯絡人..."
              className="border rounded p-2 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;