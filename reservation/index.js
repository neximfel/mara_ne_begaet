const book = document.getElementById('book_now');
const widow = document.querySelector('.sec2');
const brox = document.querySelector('.sec3');
const kruk = document.querySelector('.sec4');
const krestik = document.getElementById('krest');
const kreston = document.getElementById('kreston');
const loops = document.getElementById('con_res');
const modifys = document.getElementById('modifys');
const cancel = document.getElementById('cancel');
const krestons = document.getElementById('krestons');
const krestons2 = document.getElementById('krestons2');
book.addEventListener('click', () => {
    widow.style.display = 'flex';
});
krestik.addEventListener('click', () => {
    widow.style.display = 'none';
});
loops.addEventListener('click', () => {
    widow.style.display = 'none';
    brox.style.display = 'flex';
});
kreston.addEventListener('click', () => {
    brox.style.display = 'none';
});
modifys.addEventListener('click', () => {
    brox.style.display = 'none';
    widow.style.display = 'flex';
});
cancel.addEventListener('click', () => {
    kruk.style.display = 'flex';
    brox.style.display = 'none';
});
krestons.addEventListener('click', () => {
    kruk.style.display = 'none';
});
krestons2.addEventListener('click', () => {
    kruk.style.display = 'none';
});