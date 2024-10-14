import React, { useState } from "react";
import { Contact } from "../types";

// 定義 ContactForm 組件的屬性
interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
}

// 定義 ContactForm 組件
const ContactForm: React.FC<ContactFormProps> = ({ onAddContact }) => {
  // 使用 useState 鉤子來管理表單字段的狀態
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // 處理表單提交的函數
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 創建新的聯絡人對象
    const newContact: Contact = { name, email, phone };
    // 調用父組件傳遞的 onAddContact 函數
    onAddContact(newContact);
    // 重置表單字段
    setName("");
    setEmail("");
    setPhone("");
  };

  // 渲染 ContactForm 組件
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {/* 姓名輸入框 */}
      <input
        type="text"
        placeholder="姓名"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded"
      />
      {/* 郵箱輸入框 */}
      <input
        type="email"
        placeholder="郵箱"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded"
      />
      {/* 電話輸入框 */}
      <input
        type="tel"
        placeholder="電話"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded"
      />
      {/* 提交按鈕 */}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        添加聯絡人
      </button>
    </form>
  );
};

export default ContactForm;
