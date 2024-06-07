document.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.getElementById('switch');
    const body = document.body;

    // Check the local storage for dark mode preference
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark');
        switchInput.checked = true;
    }

    switchInput.addEventListener('change', () => {
        body.classList.toggle('dark');
        localStorage.setItem('dark-mode', body.classList.contains('dark'));
    });
});
