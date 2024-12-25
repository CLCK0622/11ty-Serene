document.addEventListener('DOMContentLoaded', (event) => {
    init_mode();
});

function updateGiscusTheme() {
    const theme = localStorage.theme === 'dark' ? 'dark' : 'light';
    const iframe = document.querySelector('iframe.giscus-frame');
    if (iframe) {
        iframe.contentWindow.postMessage(
            { giscus: { setConfig: { theme: theme } } },
            'https://giscus.app'
        );
    }
}

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
    updateGiscusTheme();
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
    updateGiscusTheme();
}
