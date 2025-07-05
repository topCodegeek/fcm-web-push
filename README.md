# Source code # 

This repo contains an `index.html` template that contains a javascript client, and a `firebase-messaging-sw.js` service worker file to recieve background messages. Rest coming soon.
## Here's how to use this: ##
- This doesn't contain your credentials, so create a Firebase project and web app on [firebase console](https://console.firebase.google.com).
- Fill in your credentials: App configuration in the template and a service worker and a VAPID key in the template.
- Reload the page to get a token.
- Send test messages to any token from firebase as shown in the tutorial.

## Note: ### 
This only works if you run on **https**, or **localhost** for development.