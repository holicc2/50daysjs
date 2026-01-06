const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');

labels.forEach((label, i) => {

    const input = inputs[i];
    const text = label.innerText;

    label.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${index * 50}ms`;
        label.appendChild(span);
    });

    const spans = label.querySelectorAll('span');

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
        label.classList.remove('active');
        }
    });
});