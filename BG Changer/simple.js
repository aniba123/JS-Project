let colors = ["Red", "Green", "Yellow", "rgba(245, 40, 145, 0.8)"];
let btn = document.querySelector('.btn');
let color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let Random = randomfun();
    document.body.style.backgroundColor = colors[Random];
    color.textContent = colors[Random];
});

function randomfun() {
    return Math.floor(Math.random() * colors.length);
}
