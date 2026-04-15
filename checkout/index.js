const changer = document.getElementById('sec1_main_address_change');
const widow = document.querySelector('.sec2');
const krestik = document.getElementById('krest');
const loops = document.getElementById('sec2_main_mid_search');
const confirmation = document.getElementById('sec2_main_mid_confirm');
changer.addEventListener('click', () => {
    widow.style.display = 'flex';
});
krestik.addEventListener('click', () => {
    widow.style.display = 'none';
});
loops.addEventListener('click', () => {
    widow.style.display = 'none';
});
confirmation.addEventListener('click', () => {
    widow.style.display = 'none';
});