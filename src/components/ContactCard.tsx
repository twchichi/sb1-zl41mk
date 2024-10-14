import React, { useState } from 'react';
import { Contact, Interaction } from '../types';
import { Calendar, Plus } from 'lucide-react';

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [newInteraction, setNewInteraction] = useState<Interaction>({ date: '', description: '' });

  const addInteraction = () => {
    if (newInteraction.date && newInteraction.description) {
      setInteractions([...interactions, newInteraction]);
      setNewInteraction({ date: '', description: '' });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="p-6">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-bold">姓名</td>
              <td>{contact.name}</td>
            </tr>
            <tr>
              <td className="font-bold">公司</td>
              <td>{contact.company}</td>
            </tr>
            <tr>
              <td className="font-bold">職稱</td>
              <td>{contact.title}</td>
            </tr>
            <tr>
              <td className="font-bold">住址</td>
              <td>{contact.address}</td>
            </tr>
            <tr>
              <td className="font-bold">電話</td>
              <td>{contact.phone}</td>
            </tr>
            <tr>
              <td className="font-bold">手機</td>
              <td>{contact.mobile}</td>
            </tr>
            <tr>
              <td className="font-bold">Email</td>
              <td>{contact.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-gray-100 p-4">
        <h3 className="text-lg font-semibold mb-2">互動記錄</h3>
        <ul className="space-y-2">
          {interactions.map((interaction, index) => (
            <li key={index} className="flex items-start">
              <Calendar className="mr-2 flex-shrink-0" size={18} />
              <span>{interaction.date}: {interaction.description}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="date"
            value={newInteraction.date}
            onChange={(e) => setNewInteraction({ ...newInteraction, date: e.target.value })}
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            value={newInteraction.description}
            onChange={(e) => setNewInteraction({ ...newInteraction, description: e.target.value })}
            placeholder="互動描述"
            className="border rounded p-2 mr-2"
          />
          <button
            onClick={addInteraction}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;