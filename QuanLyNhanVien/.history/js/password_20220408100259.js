const input = document.querySelector(".password");
const eyeOpen = document.querySelector(".fa-eye");
const eyeClose = document.querySelector(".fa-eye-slash");
eyeOpen.addEventListener("click", function() {
    eyeOpen.classList.add("hidden");
    eyeClose.classList.remove("hidden");
});
eyeClose.addEventListener("click", function() {
    eyeOpen.classList.remove("hidden");
    eyeClose.classList.add("hidden");
    input.setAttribute('type', 'text');
});

function showPass() {
    document.getElementById("password").type = "text";
}