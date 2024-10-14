import { Contact } from '../types';

export const saveContactToFile = (contact: Contact): void => {
  const content = `
| 欄位 | 內容 |
|------|------|
| 姓名 | ${contact.name} |
| 公司 | ${contact.company} |
| 職稱 | ${contact.title} |
| 住址 | ${contact.address} |
| 電話 | ${contact.phone} |
| 手機 | ${contact.mobile} |
| Email | ${contact.email} |
  `;

  // 在實際應用中，這裡應該使用文件系統 API 來保存文件
  console.log(`Saving contact to file: ${contact.id}.md`);
  console.log(content);
}

export const loadContactsFromFiles = (): Contact[] => {
  // 在實際應用中，這裡應該讀取文件系統中的 .md 文件
  // 現在我們只返回一些模擬數據
  return [
    {
      id: '1',
      name: '張三',
      company: 'ABC科技有限公司',
      title: '資深工程師',
      address: '台北市信義區信義路5段7號',
      phone: '(02) 2345-6789',
      mobile: '0912-345-678',
      email: 'zhang.san@abctech.com'
    },
    {
      id: '2',
      name: '李四',
      company: 'XYZ貿易股份有限公司',
      title: '行銷經理',
      address: '台中市西屯區台灣大道3段99號',
      phone: '(04) 2345-6789',
      mobile: '0923-456-789',
      email: 'li.si@xyztrade.com'
    }
  ];
}