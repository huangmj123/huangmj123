var rhit = rhit || {};
rhit.main = function () {
    let on = false;
    const bodies = document.querySelectorAll(".body");
    const buttons = document.querySelectorAll("#darkModeButton");
    for (const button of buttons) {
        button.onclick = (event) => {
            console.log("button");
            if (on==false) {
                button.style.backgroundColor = "goldenrod";
                button.innerHTML = "Light Mode";
                for (const body of bodies) {
                    body.style.backgroundColor = "black";
                }
                on = true;
            }
            else if (on==true) {
                button.style.backgroundColor = "black";
                button.innerHTML = "Dark Mode";
                on = false;
                for (const body of bodies) {
                    body.style.backgroundColor = "#8e9695";
                    body.style.backgroundImage = "url(http://www.transparenttextures.com/patterns/maze-black.png)";
                }
            }
        }
    }
};

rhit.main();