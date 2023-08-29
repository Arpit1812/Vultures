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

app.get("/about-us", function(req, res) {

    res.sendFile('about-us.html', { root: __dirname + '/public' });
})

app.get("/services", function(req, res) {
    res.sendFile('services.html', { root: __dirname + '/public' });
})

app.get("/contact-us", function(req, res) {
    res.sendFile('Contact-us.html', { root: __dirname + '/public' });
})
// Start the server
app.listen(3000, () => {
    console.log('Server is running on port');
})
