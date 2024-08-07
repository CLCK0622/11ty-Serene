document.addEventListener('DOMContentLoaded', (event) => {
    init_mode();
});

function init_mode() {
    const darkmodeCheckbox = document.getElementById("darkmode");
    const htmlElement = document.documentElement;

    if (localStorage.theme === 'dark') {
        darkmodeCheckbox.checked = true;
        htmlElement.classList.add('dark');
    } else {
        darkmodeCheckbox.checked = false;
        htmlElement.classList.remove('dark');
    }
}

function change_mode() {
    const darkmodeCheckbox = document.getElementById("darkmode");
    const htmlElement = document.documentElement;

    if (darkmodeCheckbox.checked) {
        localStorage.theme = 'dark';
        htmlElement.classList.add('dark');
    } else {
        localStorage.theme = 'light';
        htmlElement.classList.remove('dark');
    }
}
