// استيراد Firebase Services من firebaseConfig.js
import { storage, db } from "./firebaseConfig.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// التأكد من تحميل العناصر قبل تنفيذ الوظيفة
document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("imageUpload");
    const uploadButton = document.getElementById("uploadButton");
    const uploadStatus = document.getElementById("uploadStatus");

    if (!fileInput || !uploadButton || !uploadStatus) {
        console.error("❌ خطأ: أحد العناصر غير موجود في HTML!");
        return;
    }

    // وظيفة تحميل الصورة إلى Firebase Storage وتخزين الرابط في Firestore
    async function uploadImage() {
        const file = fileInput.files[0]; 

        if (!file) {
            uploadStatus.innerText = "❌ الرجاء اختيار صورة أولًا!";
            return;
        }

        uploadStatus.innerText = "جاري رفع الصورة..";

        
        // إنشاء مرجع للصورة في التخزين السحابي
        const storageRef = ref(storage, `images/${file.name}`);

        try {
            // رفع الصورة إلى التخزين السحابي
            await uploadBytes(storageRef, file);
            console.log("✅ تم رفع الصورة بنجاح!");

            // جلب رابط التحميل
            const downloadURL = await getDownloadURL(storageRef);
            console.log("🔗 رابط الصورة:", downloadURL);

            // حفظ رابط الصورة في Firestore
            await addDoc(collection(db, "uploadedImages"), {
                imageUrl: downloadURL,
                uploadedAt: new Date().toISOString()
            });

            console.log("✅ تم تخزين رابط الصورة في Firestore!");
            uploadStatus.innerText = "✅ تم رفع الصورة وتخزينها بنجاح!";
            
        } catch (error) {
            console.error("❌ حدث خطأ أثناء الرفع:", error);
            uploadStatus.innerText = "❌ حدث خطأ أثناء رفع الصورة!";
        }
    }

    // ربط الوظيفة بزر الرفع
    uploadButton.addEventListener("click", uploadImage);
});
