const links = document.querySelectorAll("ul li");

//Get the text from the DOM

const text = document.querySelectorAll(".text");

//Create the circle

const circle = document.createElement("span");

//Add the circle class to the circle

circle.setAttribute("class", "circle");

for(let i = 0; i < links.length; i++) {

    //Add the circle to every link

    links[i].appendChild(circle);

    //Add a mousemove event listener

    links[i].addEventListener("mousemove", (e) => {

        //Set circle position to cursor position

        circle.style.left = e.clientX + "px";
        circle.style.top = e.clientY + "px";

//Active circle (Glow Animation)

        circle.classList.add("circle-active");

//Get the mouse coordinate inside the links

        const innerX = e.clientX - links[i].offsetLeft;
        const innerY = e.clientY - links[i].offsetTop;

// Translate link opposite form mouse position

        text[i].style.transform = `translate(${innerX* -1}%, ${innerY* -1}%)`;
    });

//Deactivate circle (shrink) and reset Link transform when the cursor Leaves

    links[i].addEventListener("mouseout", () => {
        circle.classList.remove("circle-active");
        text[i].style.transform = "translate(-50%, -50%)";
    });
};