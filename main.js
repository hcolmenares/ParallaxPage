const text = document.getElementById('text');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

window.addEventListener('scroll', function() {
    let value = this.window.scrollY;
    text.style.marginTop = value * -1.5+'px';
    img1.style.top = value * 0.75+'px';
    img2.style.top = value * 0.5+'px';
    img3.style.top = value * 0.25+'px';
})