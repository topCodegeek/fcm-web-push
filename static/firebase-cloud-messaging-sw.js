// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.8.1/firebase-messaging-compat.js');

//Initialize
firebase.initializeApp({
  // Paste your web app credentials from firebase app setings >> 'general' tab.
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.data.title;
  const { body, icon, image } = payload.data;

  const notificationOptions = {
    body: body,
    icon:icon,
    image: image
  }
  self.registration.showNotification(notificationTitle, notificationOptions);
});