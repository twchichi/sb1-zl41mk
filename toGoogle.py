contact = {
       "name": "張三",
       "phone": "123-456-7890",
       "email": "zhangsan@example.com",
       "company": "ABC公司",
       "position": "軟件工程師"
   }

def dict_to_markdown(contact):
    markdown = f"# {contact['name']}\n\n"
    markdown += f"- 電話: {contact['phone']}\n"
    markdown += f"- 郵箱: {contact['email']}\n"
    markdown += f"- 公司: {contact['company']}\n"
    markdown += f"- 職位: {contact['position']}\n"
    return markdown

from googleapiclient.http import MediaIoBaseUpload
from io import BytesIO

def upload_to_drive(service, folder_id, filename, content):
    file_metadata = {'name': filename, 'parents': [folder_id]}
    media = MediaIoBaseUpload(BytesIO(content.encode()), mimetype='text/markdown')
    file = service.files().create(body=file_metadata, media_body=media, fields='id').execute()
    return file.get('id')


