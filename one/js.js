let input = document.getElementById("input1")
let icon = document.getElementById("ic")
icon.onclick = function () {
    if (input.type === "password") {
        input.type = "text"
        icon.className="fa-solid fa-eye"

    }else{
        input.type="password"
        icon.className="fa-solid fa-eye-slash"
    }
}