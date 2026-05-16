const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    requestAnimationFrame(() => {
    sidebar.classList.remove("translate-x-full");
    sidebar.classList.remove("opacity-0");
    });
    overlay.classList.remove("opacity-0");
    overlay.classList.remove("pointer-events-none");

});

function closeSidebar() {

    sidebar.classList.add("translate-x-full");
    sidebar.classList.add("opacity-0");
    overlay.classList.add("opacity-0");
    overlay.classList.add("pointer-events-none");
    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 500);

}
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// PREVENT CLOSING WHEN CLICKING INSIDE SIDEBAR
sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
});
