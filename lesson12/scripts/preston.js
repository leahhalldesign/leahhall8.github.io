/* PANCAKE */
const pancake = new Date();
const aside = document.querySelector('aside');

if (pancake.getDay() === 5) {
    aside.style.display = 'block';
}
    else {
        aside.style.display = 'none';
    }


