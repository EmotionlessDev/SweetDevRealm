function toggleBrowserPoniesToBackground () {
    var main = document.getElementById('main');
    if (main.style.zIndex === '') {
        main.style.zIndex = '100000000';
    }
    else {
        main.style.zIndex = '';
    }
}