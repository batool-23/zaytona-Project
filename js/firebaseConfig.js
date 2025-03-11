// تحميل Firebase من الـ CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getPerformance } from "firebase/performance";

// 🔥 بيانات Firebase من Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCx-DYPnRVGCIQL0cHSwibOpYDPo-p3Flw",
    authDomain: "zaytona-236f4.firebaseapp.com",
    projectId: "zaytona-236f4",
    storageBucket: "zaytona-236f4.appspot.com",
    messagingSenderId: "488573212965",
    appId: "1:488573212965:web:43cb395a96015c671fa2cc",
    measurementId: "G-PSK6CLGENW"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const performance = getPerformance(app);

// ✅ طباعة تأكيد في Console للتأكد من تحميل Firebase
console.log("✅ Firebase تم تحميله بنجاح!");

export { app, auth, db, storage };
