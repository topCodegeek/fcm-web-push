# FCM Web Push # 

This repository is for sending Web Push Notifications using Firebase Cloud Messaging and Python.

This repo contains:
- An `index.html` template that contains a javascript client- to generate `FCM Tokens`.
- A `firebase-messaging-sw.js` service worker file to recieve background messages. 
- A `main.py` file containing code for initializing the app, and sending notifications.
- A `requirements.txt` file containing a list of the required packages. (Doesn't include packages specific to your stack/framework) 
## Here's how to use this: ##
- This doesn't contain your credentials, so create a Firebase project and web app on [firebase console](https://console.firebase.google.com).
- Fill in your credentials: App configuration in the template and a service worker, then a VAPID key in the template.
- You need to return the service worker file on `your_website.com/firebase-messaging-sw.js`.
- Reload the page to get a token.
- Install the `firebase_admin` package; initialize the app as per the `main.py` file.
- In the function given in `main.py` file, update the `icon` path according to you; call the function to send notifications.
- For saving tokens, prepare an API endpoint that saves tokens sent from the frontend; update the API endpoint in `index.html` file, line no. 33 (if required).
- If you aren't using the functionality for saving tokens, remove the functions `getCSRF` & `saveToken` and its call from `index.html`. 

## Note: ### 
This only works if you run on **https**, or **localhost** for development.
