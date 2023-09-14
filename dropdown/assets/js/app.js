/* */
const back_to_top = document.querySelector('#back_to_top');

/* */
window.addEventListener('scroll', function () {
    const scroll_top = window.pageXOffset || document.documentElement.scrollTop;

    if (scroll_top > 500) {
        back_to_top.style.display = 'block';
    }
    else {
        back_to_top.style.display = 'none';
    };
});

/* */
back_to_top.addEventListener('click', function (event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});