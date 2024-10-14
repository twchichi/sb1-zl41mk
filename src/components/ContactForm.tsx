import React, { useState } from 'react';
import { Contact } from '../types';
import { UserPlus } from 'lucide-react';

interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onAddContact }) => {
  const [contact, setContact] = useState<Contact>({
    id: '',
    name: '',
    company: '',
    title: '',
    address: '',
    phone: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddContact({ ...contact, id: Date.now().toString() });
    setContact({
      id: '',
      name: '',
      company: '',
      title: '',
      address: '',
      phone: '',
      mobile: '',
      email: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="姓名"
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="company"
          value={contact.company}
          onChange={handleChange}
          placeholder="公司"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="title"
          value={contact.title}
          onChange={handleChange}
          placeholder="職稱"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="address"
          value={contact.address}
          onChange={handleChange}
          placeholder="住址"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="tel"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="電話"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="tel"
          name="mobile"
          value={contact.mobile}
          onChange={handleChange}
          placeholder="手機"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
          type="submit"
        >
          <UserPlus size={18} className="mr-2" />
          新增聯絡人
        </button>
      </div>
    </form>
  );
};

export default ContactForm;