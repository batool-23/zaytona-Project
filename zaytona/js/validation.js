// log in validation
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin"&& password ==="1234"){
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "home.html";
    }else{
    alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
    });