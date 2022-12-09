let button = document.getElementsByTagName("button");

button[0].addEventListener("click", () => {
    let size = "width= 700, height=700"
    let newWindow = window.open("https://www.youtube.com/index", "", size)
    newWindow.moveTo(600, 150)

    button[1].addEventListener("click", () => {
        newWindow.close()
    })
})

