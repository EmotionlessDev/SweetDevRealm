document.querySelectorAll('.overlay__nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.card__item').forEach(item => {
            item.classList.remove('highlight');
        });

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const topOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - topOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        setTimeout(() => {
            targetElement.classList.add('highlight');
        }, 500);
        setTimeout(() => {
            targetElement.classList.remove('highlight');
        }, 2000);
    });
});
