let colors = ["A", "B", "C","D","E","F",0,1,2,4,3,5,6,7,8,9];
let btn = document.querySelector('.btn');
let color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hex='#';
    for (let index = 0; index < 6; index++) {
       hex+=colors[randomfun()]    
    }
    // let Random = randomfun();
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
});

function randomfun() {
    return Math.floor(Math.random() * colors.length);
}
