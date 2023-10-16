// mobile navigation
const mobileNav = document.getElementById("mobile-nav");
const navToggle = document.getElementById("nav-toggle");

let isMobileNavVisible = false;

navToggle.addEventListener("click", function () {
    if (isMobileNavVisible) {
        mobileNav.style.visibility = "hidden";
        isMobileNavVisible = false;
    } else {
        mobileNav.style.visibility = "visible";
        isMobileNavVisible = true;
    }
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    });
});


