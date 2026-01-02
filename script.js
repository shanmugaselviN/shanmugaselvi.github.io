/* LOGIN */
document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let u = username.value.trim();
    let p = password.value.trim();

    if(u === "admin" && p === "1234"){
        alert("Welcome to Mess Fusion 🎉");
        window.location.href = "dashboard.html";
    } else {
        msg.innerText = "❌ Invalid Username or Password";
        msg.style.color = "red";
    }
});