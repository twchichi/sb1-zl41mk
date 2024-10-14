import React, { useState, useEffect } from "react";
import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";
import { Contact } from "./types";

// 定義 App 組件
import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";
import { Contact } from "./types";

// 定義 App 組件
function App() {
  // 使用 useState 鉤子來管理聯絡人列表和搜索詞
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 使用 useEffect 鉤子來從本地存儲加載聯絡人數據
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  // 處理添加新聯絡人的函數
  const handleAddContact = (newContact: Contact) => {
    // 將新聯絡人添加到列表中
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    // 將更新後的聯絡人列表保存到本地存儲
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  // 處理刪除聯絡人的函數
  const handleDeleteContact = (index: number) => {
    // 從列表中刪除指定索引的聯絡人
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    // 將更新後的聯絡人列表保存到本地存儲
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  // 過濾聯絡人列表以匹配搜索詞
  const filteredContacts = contacts.filter((contact) =>
    Object.values(contact).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // 渲染 App 組件
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">聯絡人管理器</h1>

      {/* 搜索輸入框 */}
      <input
        type="text"
        placeholder="搜索聯絡人..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      {/* 聯絡人表單組件 */}
      <ContactForm onAddContact={handleAddContact} />

      {/* 聯絡人卡片列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContacts.map((contact, index) => (
          <ContactCard
            key={index}
            contact={contact}
            onDelete={() => handleDeleteContact(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
