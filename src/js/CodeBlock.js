let htmlBlock = document.getElementById("html-block");
let cssBlock = document.getElementById("css-block");
let showCodeButton = document.getElementById("show-code-button");

htmlBlock.style.display = "none";
cssBlock.style.display = "none";


showCodeButton.addEventListener("click", () => {
    if (codeBlock.style.display === "none") {
        codeBlock.style.display = "block";
    } else {
        codeBlock.style.display = "none";
    }
}
)
