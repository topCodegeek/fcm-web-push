'''
Contains the script for sending notifications.
You need to have 'firebase_admin' package installed to use this.
'''
import firebase_admin
from firebase_admin import credentials, messaging 

# Initialize the app
cred = credentials.Certificate("Path to your credentials' file (download from firebase)")
firebase_admin.initialize_app(cred)

# Actual function
def send_data_message(token, title, body, image_url=None):
     data = {
          "title":title,
          "body":body,
          "icon":"<your-icon-url>"
     }
     if image_url:
          data["image"]=image_url
     
     message = messaging.Message(data=data, token=token)

     response = messaging.send(message)
     print("Data message sent: ", response)