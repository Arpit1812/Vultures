const express = require("express")
// const toggle_btn      = document.querySelector(".toggle-btn")
// const toggle_btn_icon = document.querySelector(".toggle-btn i")
// const dropdown_menu   = document.querySelector(".dropdown-menu")

 const app = express()
 app.use(express.static('public'));
// toggle_btn.addEventListener("click", () => {
//     dropdown_menu.classList.toggle("open");

//     toggle_btn_icon.classList = dropdown_menu.classList.contains("open")
//                                 ? "fa-solid fa-xmark"
//                                 : "fa-solid fa-bars"

// })

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port');
})
