var input = document.querySelector('textarea');

input.addEventListener('input', function () {
    this.classList.add('input-effect', 'animating');
    this.addEventListener('animationend', function () {
        this.classList.remove('animating');
    });
});      