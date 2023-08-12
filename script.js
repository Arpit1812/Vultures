const toggle_btn      = document.querySelector(".toggle-btn")
const toggle_btn_icon = document.querySelector(".toggle-btn i")
const dropdown_menu   = document.querySelector(".dropdown-menu")

toggle_btn.addEventListener("click", () => {
    dropdown_menu.classList.toggle("open");

    toggle_btn_icon.classList = dropdown_menu.classList.contains("open")
                                ? "fa-solid fa-xmark"
                                : "fa-solid fa-bars"

})