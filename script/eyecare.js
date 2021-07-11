let mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
let mainDark = getComputedStyle(document.documentElement).getPropertyValue('--main-dark');

let eyeSwitch = 1;
let eyeButton = document.getElementById("eyecare");
let eyeIcon = document.getElementById("eyecare-icon");

eyeButton.onclick = eyecareSwitch;

function eyecareSwitch() {
    if (eyeSwitch === 0) {
        document.documentElement.style.setProperty('--main-color', mainColor);
        document.documentElement.style.setProperty('--main-dark', mainDark);
        document.getElementById("header-logo").style.filter = "brightness(0)";
        eyeIcon.style.transform = "rotate(0)";
        eyeIcon.className = "fas fa-low-vision";
        eyeSwitch++;
    } else {
        document.documentElement.style.setProperty('--main-color', mainDark);
        document.documentElement.style.setProperty('--main-dark', mainColor);
        document.getElementById("header-logo").style.filter = "brightness(1)";
        eyeIcon.style.transform = "rotate(180deg)";
        eyeIcon.className = "fas fa-eye";
        eyeSwitch = 0;
    }
}