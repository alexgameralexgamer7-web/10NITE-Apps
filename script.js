javascript
document.addEventListener("mousemove", (e) => {

    const glow = document.querySelector(".glow");

    let x = e.clientX / 20;
    let y = e.clientY / 20;

    glow.style.transform = `translate(${x}px, ${y}px)`;

});